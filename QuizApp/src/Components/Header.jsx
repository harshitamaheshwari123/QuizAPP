import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';



function Header() {
  return (
      <div className='header'>
          <Link to="/" className='title'>Quiz App with Multiple Categories</Link>
          <hr className='divider'/>
      </div>
  )
}

export default Header