import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
// can you import pages? instead of doing them individually 
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import SinglePortfolioPage from './pages/SinglePortfolioPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      // do i make a single portfolio page 
      {
        path: 'portfolio/:id',
        element: <SinglePortfolioPage />, 
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ]
  }
]);

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<RouterProvider router={router} />);
