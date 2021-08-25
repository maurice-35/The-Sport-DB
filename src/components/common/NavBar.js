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
            <Link target="-blank" to="/breeds">See all Cats</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link target="-blank" to="/breeds">Breeds</Link>
          </div>
          <div className="navbar-item">
            <Link target="-blank" to="/categories">Categories</Link>
          </div>
          <div className="navbar-item">
            <Link target="-blank" to="/votes">Votes</Link>
          </div>
          <div className="navbar-item">
            <Link target="-blank" to="/favourites">Favourites</Link>
          </div>
          <div className="navbar-item">
            <Link target="-blank" to="/images">Images</Link>
          </div>
        </div>
      </div>
    </nav>
  )


}

export default NavBar