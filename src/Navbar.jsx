import React from 'react';
import "./CSS/Navbar.css";
import Logo from "./IMG/icon.jpg"
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <>
    <nav className="navbar" id="home">

    <div className="navbar-container container">

        <input type="checkbox"/>

        <div className="humburger-lines">

            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>

        </div>

        <ul className="menu-list">

            <li><Link to="/">Home</Link></li>
            <li><a href="http://ellm.in/RES_ESE/" target="_blank" rel="noreferrer">Result</a></li>
            <li><a href="https://www.lachoomemorial.org/lachoo-timetable.php" target="_blank" rel="noreferrer">Time Table</a></li>
            <li><Link to="/Sallybus">Sallybus</Link></li>
            <li><a href="https://drive.google.com/drive/folders/16soYT5UizCPVYTL5LE5JGNHYtKfMDAW0?usp=sharing" target="_blank" rel="noreferrer">Old Papaers</a></li>
            <li>
                <a href="#food">ALL Semster ▼</a>
                <ul className="dropdown">
                    <li className="first"><Link to="/Semster1">Semster 1</Link></li>
                    <li><Link to="/Semster2">Semster 2</Link></li>
                    <li><Link to="/Semster3">Semster 3</Link></li>
                    <li><Link to="/Semster4">Semster 4</Link></li>
                    <li><Link to="/Semster5">Semster 5</Link></li>
                    <li><Link to="/Semster6">Semster 6</Link></li>
                </ul>
            </li>
        </ul>

        <h1 className="logo"><img src={Logo} alt="sadas"/></h1>

    </div>

</nav>
    </>
  )
}

export default Navbar