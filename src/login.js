import React, { useContext, useRef } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { usec } from './App';

const Login = () => {
  const { pass } = useContext(usec);
  const inputRefEmail = useRef(null);
  const inputRefPassword = useRef(null);

  const loginSubmit = (e) => {
    e.preventDefault();

    let email = inputRefEmail.current.value;
    let password = inputRefPassword.current.value;

    if (pass.ema === email && pass.pas === password) {
      nav('/home');
    } else {
      alert('Invalid Email or Password');
    }
  };

  const nav = useNavigate();

  return (
    <div>
      <form onSubmit={loginSubmit}>
        <div className='div2'>
          <br />
          <input
            ref={inputRefEmail}
            className='mobile'
            type='email'
            placeholder='Email address '
          ></input>
          <input
            ref={inputRefPassword}
            className='mobile'
            type='password'
            placeholder='Password'
          ></input>
          <br />
          <br />
          <br />
          <button  type='submit' className='register'>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
