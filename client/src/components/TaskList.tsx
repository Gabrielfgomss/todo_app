/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Dayjs } from 'dayjs';
import { ContextList } from '../context/ContextList.tsx';
import Task from './Task.tsx';

interface ComponentProps {
  items: {
    _id: string;
    content: string;
    date: Dayjs;
    isFavorite: boolean;
    isComplete: boolean;
  }[];
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

interface SortItems {
  [key: string]: () => React.JSX.Element[];
}

export default function TaskList({ items, updateItem }: ComponentProps) {
  const context = useContext(ContextList);
  const sortMethod = context?.sortMethod;
  const sortItems: SortItems = {
    Tasks() {
      return items
        .filter((item) => item.isComplete === false)
        .map((item) => (
          <Task
            key={item._id}
            id={item._id}
            content={item.content}
            dated={item.date}
            isFavorite={item.isFavorite}
            isComplete={item.isComplete}
            updateItem={updateItem}
          />
        ));
    },
    Importants() {
      return items
        .filter((item) => item.isFavorite === true)
        .map((item) => (
          <Task
            key={item._id}
            id={item._id}
            content={item.content}
            dated={item.date}
            isFavorite={item.isFavorite}
            isComplete={item.isComplete}
            updateItem={updateItem}
          />
        ));
    },
    ToDo() {
      return items
        .filter((item) => item.date !== null)
        .map((item) => (
          <Task
            key={item._id}
            id={item._id}
            content={item.content}
            dated={item.date}
            isFavorite={item.isFavorite}
            isComplete={item.isComplete}
            updateItem={updateItem}
          />
        ));
    },
    Completes() {
      return items
        .filter((item) => item.isComplete === true)
        .map((item) => (
          <Task
            key={item._id}
            id={item._id}
            content={item.content}
            dated={item.date}
            isFavorite={item.isFavorite}
            isComplete={item.isComplete}
            updateItem={updateItem}
          />
        ));
    },
  };
  return sortMethod && sortItems[sortMethod] ? (
    <>{sortItems[sortMethod]()}</>
  ) : null;
}
