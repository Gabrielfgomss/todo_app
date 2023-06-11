import Drawner from './Drawner'
import { AppBar, Toolbar } from '@mui/material'
import Profile from './Profile'

export default function NavBar() {
  
  return (
    <AppBar position="fixed" >
      <Toolbar className='justify-between bg-secondary'>
        <Drawner />
        <p className='text-lg font-bold'>
          TaskManager
        </p>
        <Profile />
      </Toolbar>
    </AppBar>
  )
}
