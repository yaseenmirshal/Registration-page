import React, { useContext } from 'react'
import './App.css';
import { usec } from './App';

function Home() {

  const{pass}=useContext(usec)
  return (
    <div>
        <h1 className='hpara'>WELCOME {pass.nam} </h1>
        <p >You have successfully logged in.</p>
    </div>
  )
}

export default Home