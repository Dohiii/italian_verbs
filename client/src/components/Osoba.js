import React from 'react'

function Osoba(props) {
  return (
    <div className="osoba" ref={props.innerRef}>
      <span>{props.group}</span>
      <h5 name="tense">{props.tense}</h5>
      <select name="categoria-osoba" className="categoria-osoba">
        <option value="regularny">regularny</option>
        <option value="nieregularny">nieregularny</option>
      </select>
      <input type="text" className="form-input" placeholder="IO" />
      <input type="text" className="form-input" placeholder="TU" />
      <input type="text" className="form-input" placeholder="LUI" />
      <input type="text" className="form-input" placeholder="LEI" />
      <input type="text" className="form-input" placeholder="NOI" />
      <input type="text" className="form-input" placeholder="VOI" />
      <input type="text" className="form-input" placeholder="LORO" />
    </div>
  )
}

export default Osoba