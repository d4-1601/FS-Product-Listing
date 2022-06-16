import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();

  const submitHandler = async (e) => {

    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:3005/login', {
        username: username,
        password: password
      });
      setIsAuth(true);
      // console.log(isAuth)
      if(isAuth) {
        return <Redirect to="/home" />
      }
      // history.push('/home');
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
              {/* <input type='submit' /> */}
              <button onClick={() => history.push('/home')}>Submit</button>
          </form>
    </>
  )
}