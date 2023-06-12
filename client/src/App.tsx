import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';
import { MyContextProvider } from './context/ContextList.tsx';
import { FormContextProvider } from './context/ContextForm.tsx';

export default function App() {
  return (
    <FormContextProvider>
      <MyContextProvider>
        <NavBar />
        <div className="min-h-screen bg-primary flex items-center flex-col pt-14">
          <Outlet />
        </div>
      </MyContextProvider>
    </FormContextProvider>
  );
}
