import React from 'react';

import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      < Header />
      < Outlet />
      <div className="spacer"></div>
      < Footer />
    </>
  );
}

export default App;
