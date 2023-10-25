import React from 'react'
import { Link } from 'react-router-dom'


function BarNav({ closeSesion, visibilityNavBar, userSesion}) {
  
  return (
    <div className='barnav-container'>
     <nav className='barnav'>
        {visibilityNavBar && <div className='items-barnav-container'>
        <Link to="/" className='items-barnav'>Home</Link>
        <Link to="/Payments" className='items-barnav'>Payment</Link>
        <Link to="/" className='items-barnav' onClick={closeSesion}>Log Out</Link>
        <Link className='items-barnav' to={`/User/${userSesion}`}>Profile</Link>

        <div className='container-profile-options' style={{visibility: "hidden"}}>
          <ul>
            <li><a>View Payments</a></li>
            <li><a>Settings</a></li>
            <li><a>Log Out</a></li>
          </ul>
        </div>
        </div>}
     </nav>
    </div>
  )
}

export default BarNav