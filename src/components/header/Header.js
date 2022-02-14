/* eslint-disable jsx-a11y/alt-text */
import './Header.css'
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
function Header (){
  const [count, setCount] = useState(0);
    return(
        <>
           <nav>
           <h1>Travel Distination</h1>
           <img id="logoH"src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg" alt="" />
        <ul id="navigation">
          <Link to="/">Home</Link>
          <Link to="/city">About </Link>
          <li>
            <input type="search" placeholder="Search" />
            <button
              type="submit"
              value="Search"
              id="search" onClick={() => setCount(count + 1)}
            >Search</button>
          </li>
        </ul>
      </nav>
        </>
        )
        
    }
export default Header;