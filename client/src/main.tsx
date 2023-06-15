import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.tsx';
import App from './App.tsx';
import Dashboard from './pages/Dashboard.tsx';
import SignIn from './pages/SignIn.tsx';
import CustomStyles from './styles/themeProvider.tsx';
import AuthRequired from './components/AuthRequired.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        element: <AuthRequired />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <StyledEngineProvider injectFirst> */}
    <CustomStyles>
      <RouterProvider router={router} />
    </CustomStyles>
    {/* </StyledEngineProvider > */}
  </React.StrictMode>
);
