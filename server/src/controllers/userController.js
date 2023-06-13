import User from '../models/userModel.js';

class userController {
  static getUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId);
      if (user) {
        res.status(200).json({ exists: true });
      } else {
        res.status(200).json({ exists: false });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to check user existence' });
    }
  };

  static createUser = async (req, res) => {
    try {
      const { name, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  };
}

export default userController;
