import styles from "./Navbar.module.css"
import React from 'react'
import { Link,NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg  fixed-top">
  <div className="container">
    <Link className="navbar-brand text-white ms-5 fs-3" to={'/'}>START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0 ">
      <li className="nav-item">
          <NavLink className="nav-link active text-white" aria-current="page" to={''}>HOME</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className={`nav-link  text-white ${styles.link}`}  to={'/portofolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to={'/about'}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to={'/contact'}>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>
  )
}
