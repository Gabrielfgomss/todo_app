import { Button, Fab, Modal, TextField } from '@mui/material';
import { FormEvent, useState, ChangeEvent } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers';
import Cookies from 'js-cookie';

interface formDataType {
  id?: string;
  content: string;
  date: {
    $d: Dayjs | null;
  };
}
interface ComponentProps {
  // eslint-disable-next-line no-unused-vars
  createTask: (item: formDataType) => Promise<void>;
}

export default function CreateTask({ createTask }: ComponentProps) {
  const values = Cookies.get('session');
  const [formData, setFormData] = useState<formDataType>({
    content: '',
    date: {
      $d: null,
    },
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      content: event.target.value,
    }));
  };
  const handleChange = (pickerEvent: Dayjs | null) => {
    setFormData((prevData) => ({
      ...prevData,
      date: {
        $d: pickerEvent,
      },
    }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      createTask(formData);
    } finally {
      setOpen(false);
      if (values)
        setFormData({
          content: '',
          date: {
            $d: null,
          },
        });
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
        onClose={handleOpen}
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
            onChange={handleChangeContent}
            className="w-full"
            label="Adicionar tarefa"
            color="customText"
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Selecione uma data"
              value={formData.date.$d}
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
