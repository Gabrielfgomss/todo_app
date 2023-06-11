import { FormEvent } from "react"
import CreateTask from "../components/CreateTask"
import TaskList from "../components/TaskList"

export default function Dashboard() {
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event?.currentTarget.senha.value)
  }

  return (
    <>
      <div className="p-8">
        <h1 className="p-30 text-text text-3xl font-medium">Tarefas</h1>
      </div>
      <div className="w-full">
        <ul className="space-y-4 text-lg  mx-2">
          {/* {items.map(item =>
            <li id={item.type} className="bg-[#DAD7CD] p-4 rounded-lg">{item.content}</li>)} */}
          <TaskList />
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <CreateTask />
        </form>
      </div>
    </>
  )
}
