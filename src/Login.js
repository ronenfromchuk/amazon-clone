import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import userEvent from '@testing-library/user-event';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // fancy firebase login --->
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created a new user
                // with email and password
                console.log(auth);
                if (auth) {
                // pushing u to main page after creating account
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

        // firebase register --->
    }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
      </Link>

      <div className='login__container'>
          <h1>Sign in</h1>

          <form>
              <h5>E-mail</h5>
              <input
              type='text'
              value={email}
              onChange={e => setEmail(e.target.value)}
              />

              <h5>Password</h5>
              <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              />

              <button
              type='submit'
              onClick={signIn}
              className='login__signInButton'>Sign In</button>             
          </form>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button
          onClick={register}
          className='login__registerButton'>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login