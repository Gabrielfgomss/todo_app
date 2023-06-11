import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react'

export default function Profile() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar
          sx={{ width: 24, height: 24 }}
          src="src/assets/gabriel.png" />
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
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  )
}
