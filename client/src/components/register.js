import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

export function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('initial event', event)
    try {
      await axios.post('http://127.0.0.1:3005/signup', {
        username: username,
        email: email,
        password: password
      });
      history.push("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <>
      <div>register</div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" />
    </form>
    </>
  )
}