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
import BillPayment from './pages/BillPayment';
import MobilePayee from './pages/MobilePayee';
import MobilePayment from './pages/MobilePayment';
import TransferPage from './pages/TransferPage';
import TopUpPage from './pages/TopUpPage';
import SendMoneyPage from './pages/SendMoneyPage';

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
  {
    path: "/BillPayment",
    element: <BillPayment />,
  },
  {
    path: "/MobilePayee",
    element: <MobilePayee />,
  },
  {
    path: "/MobilePayment",
    element: <MobilePayment />,
  },
  {
    path: "/TransferPage",
    element: <TransferPage />,
  },
  {
    path: "/TopUpPage",
    element: <TopUpPage />,
  },
  {
    path: "/SendMoneyPage",
    element: <SendMoneyPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
