import React, { useEffect } from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'


function MainPage() {

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "http://127.0.0.1:3000/api/v1/admin", {
  //       method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("verbAppToken")}`
  //       }
  //     }
  //     ).then((response) => response.json())
  //   }

  //   fetchData()
  // }, [])

  return (
    <Page title="Admin Page">
      <div className="flex-column1">
        <Link className='btn' to="/add-verb">Dodaj Nowy Czasownik</Link>
        <Link className='btn' to="./search">Wyszukaj i Edytuj</Link>
      </div>
      <div className="flex-column2">
        <img src="./images/landing.png" alt="" />
      </div>
    </Page>
  )
}

export default MainPage