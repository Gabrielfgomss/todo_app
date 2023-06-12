import React, { useContext } from 'react';
import { ContextList } from '../context/ContextList.tsx';
import Task from './Task.tsx';

interface SortItems {
  [key: string]: () => React.JSX.Element[];
}

export default function TaskList() {
  const context = useContext(ContextList);
  const items = context?.items ?? [];
  console.log(items);
  const sortMethod = context?.sortMethod;
  const sortItems: SortItems = {
    Tasks() {
      return items
        .filter((item) => item.isComplete === false)
        .map((item, index: number) => (
          <Task
            key={index}
            index={index}
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
        .map((item, index: number) => (
          <Task
            key={index}
            index={index}
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
        .map((item, index: number) => (
          <Task
            key={index}
            index={index}
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
        .map((item, index: number) => (
          <Task
            key={index}
            index={index}
            content={item.content}
            dated={item.date}
            isFavorite={item.isFavorite}
            isComplete={item.isComplete}
          />
        ));
    },
  };
  return sortMethod && sortItems[sortMethod] ? (
    <>{sortItems[sortMethod]()}</>
  ) : null;
}
