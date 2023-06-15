import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setAnchorEl(null);
    Cookies.remove('session');
    navigate('/');
  };
  return (
    <div>
      <IconButton size="large" onClick={handleMenu} color="inherit">
        <Avatar sx={{ width: 24, height: 24 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogOut}>Sair</MenuItem>
      </Menu>
    </div>
  );
}
