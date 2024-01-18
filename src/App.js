import React, { createContext, useState } from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Login from './login';
import Home from './home';

export const usec=createContext()

const App = () => {
  const [pass, setpass] = useState({
    nam: '',
    ema: '',
    pas: '',
    re: '',  
  });
  return (
    <div className='div'>
      <BrowserRouter>
        <usec.Provider value={{ pass, setpass }}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </usec.Provider>
      </BrowserRouter>
    </div>
  );
};


export default App;