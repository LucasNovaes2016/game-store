import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div id="navbarContainer" className="container">
        <a className="navbar-brand" href="#"><i className="fa fa-gamepad fa-2x" aria-hidden="true"></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar