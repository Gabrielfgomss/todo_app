import { IconButton } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { useContext, useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import { updateItem } from '../services/api.ts';
import { ContextList } from '../context/ContextList.tsx';

interface TaskProps {
  id: string;
  content: string;
  dated: Dayjs | null;
  isFavorite: boolean;
  isComplete: boolean;
}

export default function Task({
  id,
  content,
  dated,
  isFavorite,
  isComplete,
}: TaskProps) {
  const context = useContext(ContextList);
  const setWasClicked = context?.setWasClicked;
  const wasClicked = context?.wasClicked;

  const handleFavorite = () => {
    if (setWasClicked && wasClicked !== undefined) {
      setWasClicked(!wasClicked);
      updateItem({ id, isFavorite: !isFavorite });
    }
  };
  const handleComplete = () => {
    if (setWasClicked && wasClicked !== undefined) {
      setWasClicked(!wasClicked);
      updateItem({ id, isComplete: !isComplete });
    }
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
