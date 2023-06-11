import ScheduleIcon from '@mui/icons-material/Schedule';
import { useContext, useState } from 'react'
import { ContextList } from '../context/ContextList';
import { IconButton } from '@mui/material';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

export default function TaskList() {

  const { sortMethod, items } = useContext(ContextList)

  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (event) => {
    console.log(event.currentTarget)
    setIsClicked(event.currentTarget);
  };

  const sortItems = {
    Tasks() {
      return items.filter(item => item.status === false).map((item, index) =>
        <div key={index} className="bg-[#DAD7CD] flex justify-between p-4 rounded-lg">
          <p className='grid items-center gap-x-1'>
            <RadioButtonUncheckedOutlinedIcon sx={{ gridColumnStart: '1' }} />
            <p className='col-start-2'>{item.content}</p>
            {item.type === 'track' && <ScheduleIcon sx={{ gridColumnStart: '2', height: '14px' }} />}
          </p>
          <IconButton sx={{ padding: '0px', color: '#000' }} onClick={handleClick}>
            {item.favorite === true ? <TurnedInOutlinedIcon /> : <TurnedInNotOutlinedIcon />}
          </IconButton>
        </div>)
    },
    Importants() {
      return items.filter(item => item.favorite === true)
        .map((item, index) =>
          <div key={index} className="bg-[#DAD7CD] flex justify-between p-4 rounded-lg">
            <p className='grid items-center gap-x-1'>
              <RadioButtonUncheckedOutlinedIcon sx={{ gridColumnStart: '1' }} />
              <p className='col-start-2'>{item.content}</p>
              {item.type === 'track' && <ScheduleIcon sx={{ gridColumnStart: '2', height: '14px' }} />}
            </p>
            <IconButton sx={{ padding: '0px', color: '#000' }} onClick={handleClick}>
              {item.favorite === true ? <TurnedInOutlinedIcon /> : <TurnedInNotOutlinedIcon />}
            </IconButton>
          </div>)
    },
    ToDo() {
      return items.filter(item => item.type === 'track')
        .map((item, index) =>
          <div key={index} className="bg-[#DAD7CD] flex justify-between p-4 rounded-lg">
            <p className='grid items-center gap-x-1'>
              <RadioButtonUncheckedOutlinedIcon sx={{ gridColumnStart: '1' }} />
              <p className='col-start-2'>{item.content}</p>
              {item.type === 'track' && <ScheduleIcon sx={{ gridColumnStart: '2', height: '14px' }} />}
            </p>
            <IconButton sx={{ padding: '0px', color: '#000' }} onClick={handleClick}>
              {item.favorite === true ? <TurnedInOutlinedIcon /> : <TurnedInNotOutlinedIcon />}
            </IconButton>
          </div>)
    },
    Completes() {
      return items.filter(item => item.status === true)
        .map((item, index) =>
          <div key={index} className="bg-[#DAD7CD] flex justify-between p-4 rounded-lg">
            <p className='grid items-center gap-x-1'>
              <RadioButtonUncheckedOutlinedIcon sx={{ gridColumnStart: '1' }} />
              <p className='col-start-2'>{item.content}</p>
              {item.type === 'track' && <ScheduleIcon sx={{ gridColumnStart: '2', height: '14px' }} />}
            </p>
            <IconButton sx={{ padding: '0px', color: '#000' }} onClick={handleClick}>
              {item.favorite === true ? <TurnedInOutlinedIcon /> : <TurnedInNotOutlinedIcon />}
            </IconButton>
          </div>)
    }
  }

  return (
    <>
      {
        sortItems[sortMethod] ? sortItems[sortMethod]() : null
      }
    </>
  )
}
