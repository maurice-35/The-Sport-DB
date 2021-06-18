import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './components/Home' 

const NavBar = () => {

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <span role="img">
            <Link to="/">🐈</Link>
          </span>
        </div>
        <div className="navebar-start">
          <div className="navbar-item">
            <Link target="-blank" to="/cats">See all Cats</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            SignUp
          </div>
          <div className="navbar-item">
            Login
          </div>
        </div>
      </div>
    </nav>
  )


}

export default NavBar