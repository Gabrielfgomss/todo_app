import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import { MyContextProvider } from "./context/ContextList";

export default function App() {

  return (
    <>
      <MyContextProvider>
        <NavBar />
        <div className="min-h-screen bg-primary flex items-center flex-col pt-14">
          <Outlet />
        </div>
      </MyContextProvider>
    </>
  )
}