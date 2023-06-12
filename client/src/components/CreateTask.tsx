import { Button, Fab, Modal, TextField } from '@mui/material';
import { FormEvent, useState, ChangeEvent } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { createTask } from '../services/api';

interface formDataType {
  content: string;
  date: Dayjs | null;
}

export default function CreateTask() {
  const [formData, setFormData] = useState<formDataType>({
    content: '',
    date: null,
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement> | Dayjs) => {
    if ('target' in event) {
      // Handle input change
      const inputEvent = event as ChangeEvent<HTMLInputElement>;
      setFormData((prevData) => ({
        ...prevData,
        content: inputEvent.target.value,
      }));
    } else {
      // Handle date picker change
      const pickerEvent = event as Dayjs;
      setFormData((prevData) => ({
        ...prevData,
        date: pickerEvent,
      }));
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      createTask(formData);
    } finally {
      setOpen(false);
    }
  };
  return (
    <>
      <Fab
        color="customSecondary"
        aria-label="add"
        onClick={handleOpen}
        sx={{ position: 'fixed', zIndex: '10', bottom: '24px', right: '24px' }}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}
      >
        <form
          className="flex flex-col items-end gap-4 bg-light p-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <TextField
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full"
            label="Adicionar tarefa"
            color="customText"
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Selecione uma data"
              value={formData.date}
              onChange={(newValue) => handleChange(newValue)}
            />
          </LocalizationProvider>
          <Button type="submit" variant="contained" color="customPrimary">
            Criar
          </Button>
        </form>
      </Modal>
    </>
  );
}
