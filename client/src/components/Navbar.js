import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'

function NavBar() {
  const { loggedIn, setLoggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  async function handleLogOut() {
    setLoggedIn(false)
    localStorage.removeItem("verbAppToken")
    localStorage.removeItem("verbAppUser")
    navigate("/")
  }


  return (

    <div className='navbar'>

      {loggedIn ? <button className="log-in-btn log-off-btn" onClick={handleLogOut} >Log off</button> : ""}

    </div>

  )
}

export default NavBar