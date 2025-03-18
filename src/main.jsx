import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import AboutUs from './pages/AboutUs';
import UserProfile from './components/pageComponents/userProfile/UserProfile';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
