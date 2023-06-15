/* eslint-disable no-unused-vars */
import { IconButton } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { Dayjs } from 'dayjs';

interface TaskProps {
  id: string;
  content: string;
  dated: Dayjs | null;
  isFavorite: boolean;
  isComplete: boolean;
  updateItem: ({
    id,
    isFavorite,
    isComplete,
  }: {
    id: string;
    isFavorite?: boolean;
    isComplete?: boolean;
  }) => void;
}

export default function Task({
  id,
  content,
  dated,
  isFavorite,
  isComplete,
  updateItem,
}: TaskProps) {
  const handleFavorite = () => {
    updateItem({ id, isFavorite: !isFavorite });
  };
  const handleComplete = () => {
    updateItem({ id, isComplete: !isComplete });
  };
  return (
    <div className="bg-[#DAD7CD] flex justify-between p-4 rounded-lg">
      <div className="grid items-center gap-x-1">
        {/* Complete */}
        <IconButton
          onClick={handleComplete}
          sx={{ padding: '0px', color: '#000' }}
        >
          {isComplete === false ? (
            <RadioButtonUncheckedOutlinedIcon sx={{ gridColumnStart: '1' }} />
          ) : (
            <RadioButtonCheckedIcon sx={{ gridColumnStart: '1' }} />
          )}
        </IconButton>
        <p className="col-start-2">{content}</p>
        {dated !== null && (
          <ScheduleIcon sx={{ gridColumnStart: '2', height: '14px' }} />
        )}
      </div>
      {/* Favorite */}
      <IconButton
        sx={{ padding: '0px', color: '#000' }}
        onClick={handleFavorite}
      >
        {isFavorite === false ? (
          <TurnedInNotOutlinedIcon />
        ) : (
          <TurnedInOutlinedIcon />
        )}
      </IconButton>
    </div>
  );
}
