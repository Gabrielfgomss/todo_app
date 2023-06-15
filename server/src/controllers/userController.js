import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

class userController {
  static getUser = async (req, res) => {
    try {
      const { name, password } = req.body;
      const user = await User.findOne({ name });

      if (user) {
        const checkPassword = await bcrypt.compare(password, user.password);
        if (checkPassword) {
          res.status(200).json({ exists: true, user });
        } else {
          res
            .status(401)
            .json({ exist: true, message: 'Usuário ou senha incorreta' });
        }
      } else {
        res.status(401).json({ exists: false, message: 'Usuario não existe' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Falha ao verificar' });
    }
  };

  static createUser = async (req, res) => {
    try {
      const user = req.body.user;
      let password = req.body.password;
      const encryptPassword = await bcrypt.hash(password, 10);
      const userCreated = new User({ name: user, password: encryptPassword });
      await userCreated.save();
      res.status(201).json({ success: true, userCreated });
    } catch (error) {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ success: false, message: 'Esse nome já existe' });
      }
      return res.status(500).json({ error: 'Falha ao criar' });
    }
  };
}

export default userController;
