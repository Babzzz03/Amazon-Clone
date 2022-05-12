import React, { useState } from 'react'
import "./Login.css"
import Logo from "./images/amazon1.jpg"
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase";
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const signIn = e => {
        e.preventDefault();
auth
.signInWithEmailAndPassword(email,password)
.then(auth => {
    history.push('/')

})
.catch(error => alert(error.mesage))

    }
    const register = e => {
        e.preventDefault();
auth.createUserWithEmailAndPassword(email,password)
.then((auth) => { 
console.log(auth)
if (auth) {
    history.push('/')
}
  })
  .catch(error => alert(error.message))

    }
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <div>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button 
          type='submit'
          onClick={signIn}
          className="login__signInButton">Sign In</button>
        </div>

        <p>
          By signing in you agree to AMAZON FAKE CLONE condition of use and
          sale. please see our privacy Notice, our Cookies Notice and our
          interest-based Ads Notice
        </p>
        <h3>If you don't have an account please create your account below, else sign in</h3>
        <button 
        onClick={register}
        className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login
