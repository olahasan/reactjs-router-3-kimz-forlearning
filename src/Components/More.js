import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function More() {
  return (
    <div className='More'>
        More
        <ul style={{display: 'flex', listStyle:'none' , justifyContent:'space-around'}}>
            <li>
                <Link to='One'>One</Link>
            </li>
            <li>
                <Link to='Two'>Two</Link>
            </li>
            <li>
                <Link to='/'>Log out</Link>
            </li>
        </ul>
        <div> <Outlet/> </div>
    </div>
  )
}

export default More