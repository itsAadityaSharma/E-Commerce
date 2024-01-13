import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[menu, setMenu]=useState("Shope");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shop Vista</p>
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shope")}}><Link to='/'>Shop</Link>{menu==="Shope" && <hr/>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link to='/product'>Men</Link>{menu==="Men" && <hr/>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link to='/womens'>Women</Link>{menu==="Women" && <hr/>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link to='/kids'>Kids</Link>{menu==="Kids" && <hr/>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;