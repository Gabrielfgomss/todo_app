import { IconButton } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

interface TaskProps {
  index: number;
  content: string;
  dated: Dayjs | null;
  isFavorite: boolean;
  isComplete: boolean;
}

export default function Task({
  index,
  content,
  dated,
  isFavorite,
  isComplete,
}: TaskProps) {
  const [clickFavorite, setIsFavorite] = useState(isFavorite);
  const [clickComplete, setIsComplete] = useState(isComplete);
  console.log(isComplete);
  const handleFavorite = () => {
    setIsFavorite(!clickFavorite);
  };
  const handleComplete = () => {
    setIsComplete(!clickComplete);
  };
  return (
    <div
      key={index}
      className="bg-[#DAD7CD] flex justify-between p-4 rounded-lg"
    >
      <div className="grid items-center gap-x-1">
        {/* Complete */}
        <IconButton
          onClick={handleComplete}
          sx={{ padding: '0px', color: '#000' }}
        >
          {clickComplete === false ? (
            <RadioButtonUncheckedOutlinedIcon sx={{ gridColumnStart: '1' }} />
          ) : (
            <RadioButtonCheckedIcon sx={{ gridColumnStart: '1' }} />
          )}
        </IconButton>
        <p className="col-start-2">{content}</p>
        {dated === null && (
          <ScheduleIcon sx={{ gridColumnStart: '2', height: '14px' }} />
        )}
      </div>
      {/* Favorite */}
      <IconButton
        sx={{ padding: '0px', color: '#000' }}
        onClick={handleFavorite}
      >
        {clickFavorite === false ? (
          <TurnedInNotOutlinedIcon />
        ) : (
          <TurnedInOutlinedIcon />
        )}
      </IconButton>
    </div>
  );
}
