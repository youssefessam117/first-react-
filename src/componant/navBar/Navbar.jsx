import React, { Component } from 'react'
import Style from "./navbar.module.css"

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className = {`navbar navbar-expand-lg fixed-top ${Style.navstyle}`}>
  <div className="container">
    <a className="navbar-brand text-light fs-1 text" href="#">START REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link px-3 text-light fs-4 text" href="#">PORTFOLIO</a>
        <a className="nav-link px-3 text-light fs-4 text" href="#">ABOUT</a>
        <a className="nav-link px-3 text-light fs-4 text">CONTACT</a>
      </div>
    </div>
  </div>
</nav>

      </>
    )
  }
}
