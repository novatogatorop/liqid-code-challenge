import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarItems } from "./NavbarItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  };


  render() {
    return (
      <>
        <nav className={this.state.clicked ? "Navbar active" : "Navbar"}>
          <Link to="/" className="nav-logo">
            <div className={this.state.clicked ? "nav-logo-box active" : "nav-logo-box"}>
              <img src={this.state.clicked ? "images/Group 1-red.png" : "images/Group 1-white.png"} alt="logo-img" className="logo-img" />
            </div>
            <div className="nav-logo-intro">Hallo, LIQID!</div>
          </Link>
          <div className="nav-divider">|</div>
          <div className="nav-menu-mobile" onClick={this.handleClick}>
            <img src={this.state.clicked ? "images/Group 54.png" : "images/Group 52.png"} alt="" className="nav-mobile-icon" />
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {NavbarItems.map((item, index) => {
              return (
                <li className={item.cName}>
                  <Link to={item.path}>
                    <img src={item.img} alt={item.alt} className="nav-menu-img" />
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;