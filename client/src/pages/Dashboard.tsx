import CreateTask from '../components/CreateTask.tsx';
import TaskList from '../components/TaskList.tsx';

export default function Dashboard() {
  return (
    <>
      <div className="p-8">
        <h1 className="p-30 text-text text-3xl font-medium">Tarefas</h1>
      </div>
      <div className="w-full">
        <ul className="space-y-4 text-lg  mx-2">
          <TaskList />
        </ul>
      </div>
      <div>
        <CreateTask />
      </div>
    </>
  );
}
