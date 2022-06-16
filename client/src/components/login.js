import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submitHandler = async (e) => {
    console.log('login', e)
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:3005/login', {
        username: username,
        password: password
      });
      history.push('/home');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div>login</div>
        <form onSubmit={submitHandler}>
          <input type='text' placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type='submit' />
      </form>
    </>
  )
}