import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "../style/Login.css"
import { auth } from "../../../firebase"

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailInput = (event) => {
    const { value } = event.target
    setEmail(value)
  }
  const handlePasswordInput = (event) => {
    const { value } = event.target
    setPassword(value)
  }
  const signIn = (event) => {
    event.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/")
      })
      .catch((error) => alert(error.message))
  }

  const register = (event) => {
    event.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/")
        }
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form className="login__form" onSubmit={signIn}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailInput} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordInput} />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
