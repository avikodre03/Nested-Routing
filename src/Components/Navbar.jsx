import React, { useContext } from 'react'
import "./Styling/Navbar.css"
import {Link} from 'react-router-dom'
import { myContext } from './Context/DataProvider'

const Navbar = () => {
  const {setLogin , input} = useContext(myContext)
  return (
    <div className='navbarDiv'>
        <h1 style={{color:"red"}}>React</h1>
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/tech">
            <li>Technologies</li>
            </Link>
            <Link to="/product">
            <li>Products</li>
            </Link>
            <Link to="/contact">
            <li>Contacts Us</li>
            </Link>
        </ul>
        <span>
      <button onClick={()=>{setLogin(false)}}>LogOut</button>
      <p style={{color:"yellow"}}><b>{input} </b></p>
      </span>
    </div>
  )
}

export default Navbar;