import React from "react"

function Container(props) {
  return (
    <div className={"main-container"}>
      {props.children}
    </div>

  )
}

export default Container