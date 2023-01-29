import React from 'react'

function OsobaSection(props) {
  return (
    <section className={`section section-${props.group}`} ref={props.innerRef}>

      <h4>{props.group}</h4>

      {props.children}
    </section>
  )
}

export default OsobaSection