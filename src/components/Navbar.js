import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
          </ul>
          {/* <form classNameName="form-inline my-2 my-lg-0">
            <input classNameName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" form="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
      </div>
    </div>
</nav>
  )
}


Navbar.propTypes= {
    title:PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps= {
    title:'set title',
    about: "About text here"
}