import React, { useEffect, useState } from "react"
import Page from './Page'
import LoadingDotsIcon from "./LoadingDotsicon"
import { Link } from "react-router-dom"




function AllVerbs() {
  const [isLoading, setIsLoading] = useState(true)
  const [verbs, setVerbs] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        await fetch(
          "https://italian-verbs.onrender.com/api/v1/admin", {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("verbAppToken")}`
          }
        }).then(data => data.json()).then(data => {
          setIsLoading(false)
          setVerbs(data.verbs)
        }
        )
      } catch (e) {
        console.log(e)
      }
    }
    fetchPosts()

  }, [])

  if (isLoading) return <LoadingDotsIcon />

  return (
    <Page title="All Posts">
      <Link className="btn" to={"/"}>powrót</Link>
      <div className="all-verbs">
        {verbs.map(verb => {

          return (
            <Link key={verb.czasownik} to={`/verb/${verb.czasownik}`} className="list-group-item">
              <strong>{verb.czasownik} </strong> {" "}
            </Link>
          )
        })}
      </div>


    </Page>
  )
}

export default AllVerbs