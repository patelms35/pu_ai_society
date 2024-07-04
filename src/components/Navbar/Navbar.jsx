import React, { useState } from 'react';
import classes from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { NAVITEM } from '../../lib/constant'
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/*  logo */}
      <div className={classes.leftSide}>
        <img src={logo} alt="logo" className={classes.logo} />
        <p className={classes.title}>The PU AI Society</p>
        {/* The PU AI Society */}
      </div>

      {/* home, students */}
      <div className={classes.centerSide}>
        {NAVITEM.map((item, key) => (
          <NavLink to={item.link} key={key} 
          className={({isActive})=>`${classes.navlink} ${isActive?classes.activeNav:""}`
          }>
              {item.title}
          </NavLink>
        ))}
      </div>

      {/* join us */}
      <div className={classes.rightSide}>
        <button>Join us</button>
      </div>

      {/* dropdown */}
      <div className={classes.burger} onClick={toggleMenu}>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>

      {isOpen && (
        <div className={classes.dropdownMenu}>
          {/* <a href="#">Home</a>
          <a href="#">Students</a>
          <a href="#">Join Us</a> */}
          {NAVITEM.map((item, key) => (
            <Link to={item.link} key={key}>
                {item.title}
            </Link>
          ))}
        </div>
      )}
      {/* <div className={classes.opt}></div>
        <div className={classes.opt}></div>
        <div className={classes.opt}></div> */}
    </nav>
  )
}

export default Navbar