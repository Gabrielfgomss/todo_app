import React, { useContext } from 'react';
import { ContextList } from '../context/ContextList.tsx';
import Task from './Task.tsx';

interface SortItems {
  [key: string]: () => React.JSX.Element[];
}

export default function TaskList() {
  const context = useContext(ContextList);
  const items = context?.items ?? [];
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
          />
        ));
    },
    Completes() {
      return items
        .filter((item) => item.isComplete === true)
        .map((item) => {
          console.log(item);
          return (
            <Task
              key={item._id}
              id={item._id}
              content={item.content}
              dated={item.date}
              isFavorite={item.isFavorite}
              isComplete={item.isComplete}
            />
          );
        });
    },
  };
  return sortMethod && sortItems[sortMethod] ? (
    <>{sortItems[sortMethod]()}</>
  ) : null;
}
