import React, { useContext } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {usec} from './App';

const Main = () => {
    const { pass, setpass } = useContext(usec);
  
    console.log(pass.pas);

  const changesname = (f) => {
    setpass({ ...pass, nam: f.target.value });
  };

  const changesema = (g) => {
    setpass({ ...pass, ema: g.target.value });
  };

  const changes = (e) => {
    setpass({ ...pass, pas: e.target.value });
  };
  console.log(pass);

  const changess = (m) => {
    setpass({ ...pass, re: m.target.value });
  };

  const nav = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (pass.pas === pass.re) {
      if(pass.pas.length>4){
        nav('/login');

      }
      else{alert('Password should be more than 5 characters')};
     
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className='div1'>
      <br />
      <h1>Create a new account</h1>
      <p>It's quick and easy</p>
      <br />
      <form onSubmit={submitHandler}>
        <input
          onChange={(f) => changesname(f)}
          required
          className='first'
          type='text'
          placeholder='First Name '
        />
        <input  required className='last' type='text' placeholder='Last Name ' />
        <br />

        <input
          onChange={(g) => changesema(g)}
          required
          className='mobile'
          type='email'
          placeholder='Email address '
        ></input>

        <input
          onChange={(e) => changes(e)}
          required
          className='mobile'
          type='password'
          placeholder='Password'
        ></input>

        <input
          onChange={(m) => changess(m)}
          required
          className='mobile'
          type='password'
          placeholder='Verify Password'
        />
        <br />
        <br />
        <br />
        <button type='submit' className='register'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Main;
