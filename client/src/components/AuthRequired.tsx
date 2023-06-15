import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthRequired() {
  const values = Cookies.get('session');
  if (!values) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
