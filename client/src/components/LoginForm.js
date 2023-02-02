import React, { useState, useContext } from 'react'
import UserContext from '../UserContext'
import Page from './Page'

function LoginForm(props) {

  const { setLoggedIn } = useContext(UserContext)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()




  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const body = { email: email, password: password }

      const response = await fetch(
        "https://italian-verbs.onrender.com/api/v1/auth/login", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body)
      }
      ).then((response) => response.json())


      localStorage.setItem("verbAppToken", response.user.token)
      localStorage.setItem("verbAppUsername", response.user.username)
      setLoggedIn(true)


    } catch (e) {
      props.addFlashMessage("Email or username is incorrect")
      console.log(e)
    }
  };

  return (
    <Page>
      <div className="flex-column1">
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="login-email">Input email</label>
          <input id="login-email" className="login" type="text" onChange={e => setEmail(e.target.value)} />

          <label htmlFor="login-password">Input password</label>
          <input className="login" type="password" autoComplete='off' onChange={e => setPassword(e.target.value)} />
          <button className="log-in-btn">Log In</button>
        </form>
      </div>
      <div className="flex-column2">
        <img id="lock-image" src="./images/DALL·E 2023-01-28 22.03.10.png" alt="" />
      </div>
    </Page>
  )
}

export default LoginForm