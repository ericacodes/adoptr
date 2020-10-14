import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'


function Nav(props) {
  console.log("these are the PROPS", props)
  return (
    <nav>
      <Link to="/" className="nav-link"><h3>Adoptr  <FontAwesomeIcon icon={faPaw} /></h3></Link>
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Users
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Shelters
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <Link to="/users" className="nav-link">Create New User Profile</Link>
      <Link to="/shelters" className="nav-link">Create New Shelter Profile</Link>
      <Link to="/animals" className="nav-link">Create New Animal Profile</Link>
      <Link to="/profiles" className="nav-link">Profiles</Link>
      {props.state.type ? <div><p>Logged in as: {props.state.account.name}</p><button onClick={() => props.logout({})}>Logout (both)</button></div> : <div><Link to="/login" className="nav-link">User Login</Link><Link to="/shelterlogin" className="nav-link">Shelter Login</Link></div>}
      
    </nav>
  )
};

export default Nav;