import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import cart from '../../assets/CartButton.png'
import search from '../../assets/search.png'
import user from '../../assets/Vector.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>

        <ul className="nav-menu">
            <li> <Link style={{textDecoration:'none'}} to='/' >Home</Link> </li>
            <li> <Link style={{textDecoration:'none'}} to='/shop'>Shop</Link> </li>
            <li> <Link style={{textDecoration:'none'}} to='/product'>Product</Link> </li>
            <li><Link style={{textDecoration:'none'}} to='/contactUs'>Contact us</Link></li>
        </ul>

        <div className="nav-login-carts">
            
            <img src={search} alt="" />
            <Link style={{textDecoration:'none'}} to='/cart'><img src={cart} alt="" /></Link>
            <Link style={{textDecoration:'none'}} to='/login'><button><img src={user} alt="" /></button></Link>

        </div>
        
    </div>
  )
}

export default Navbar