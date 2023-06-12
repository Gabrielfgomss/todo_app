import { Drawer, IconButton, MenuItem } from '@mui/material';
import { useState, useContext, MouseEvent } from 'react';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TaskIcon from '@mui/icons-material/Task';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { ContextList } from '../context/ContextList.tsx';

export default function Drawner() {
  const context = useContext(ContextList);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const updateLista = context?.updateLista ?? (() => {});
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleCloseDrawer = (event: MouseEvent<HTMLElement>) => {
    setOpen(false);
    if (event.currentTarget.id) updateLista(event.currentTarget.id);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        onClick={handleClick}
        color="inherit"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        PaperProps={{ sx: { backgroundColor: '#a3b18a', color: '#1b1911' } }}
      >
        <IconButton
          size="large"
          edge="start"
          onClick={handleCloseDrawer}
          color="inherit"
          sx={{ ml: '4px', justifyContent: 'start' }}
        >
          <MenuIcon />
        </IconButton>
        <MenuItem
          onClick={handleCloseDrawer}
          id="Tasks"
          sx={{ fontWeight: '500', gap: '8px' }}
        >
          <HomeIcon />
          Tarefas
        </MenuItem>
        <MenuItem
          onClick={handleCloseDrawer}
          id="Importants"
          sx={{ fontWeight: '500', gap: '8px' }}
        >
          <TurnedInIcon />
          Importante
        </MenuItem>
        <MenuItem
          onClick={handleCloseDrawer}
          id="ToDo"
          sx={{ fontWeight: '500', gap: '8px' }}
        >
          <ScheduleIcon />À fazer
        </MenuItem>
        <MenuItem
          onClick={handleCloseDrawer}
          id="Completes"
          sx={{ fontWeight: '500', gap: '8px' }}
        >
          <TaskIcon />
          Completas
        </MenuItem>
        <MenuItem
          onClick={handleCloseDrawer}
          sx={{ fontWeight: '500', gap: '8px' }}
        >
          <ListAltIcon />
          Lista
        </MenuItem>
      </Drawer>
    </>
  );
}
