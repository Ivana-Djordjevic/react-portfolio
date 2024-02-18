import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      < Header />
      < Footer />
      < Outlet />
    </>
  );
}

export default App;
