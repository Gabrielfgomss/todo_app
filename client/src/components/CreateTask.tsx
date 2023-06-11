import { Button, Fab, Modal, TextField, styled, IconButton } from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`;

export default function CreateTask() {

  const [value, setValue] = useState<Dayjs | null>(null);
  const [open, setOpen] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleOpenDatePicker = () => {
    setOpenDatePicker(true);
  };

  const handleCloseDatePicker = () => {
    setOpenDatePicker(false);
  };

  const handleDateChange = (date) => {
    setValue(date);
    console.log(date.$d)
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab color="customSecondary" aria-label="add" onClick={handleOpen}
        sx={{ position: 'fixed', zIndex: '10', bottom: '24px', right: '24px' }}>
        <AddIcon onClick={handleOpen} />
      </Fab>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <div className="flex flex-col items-end gap-4 bg-light p-8 rounded-lg">
          <TextField className="w-full" label="Adicionar tarefa" color="customText" required></TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <IconButton
              onClick={handleOpenDatePicker}>
              <CalendarTodayIcon sx={{ width: '24px', height: '24px', color: '#1b1911' }} />
            </IconButton>
            <DatePicker
              label="Selecione uma data"
              sx={{ display: 'none' }}
              open={openDatePicker}
              onClose={handleCloseDatePicker}
              onAccept={handleDateChange}
              value={value}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
          <Button type='submit' onClick={handleClose} variant="contained" color="customPrimary">
            Criar
          </Button>
        </div>
      </StyledModal>
    </>
  )
}
