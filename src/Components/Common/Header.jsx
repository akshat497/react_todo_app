import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='NavBar'>
       <div>
         <div><Link>Tasks</Link></div>
          <div><Link>Pending Tasks</Link></div>
            <div><Link>Completed Tasks</Link></div>
       </div>
              <div><input type='Search' placeholder='Search.....'/></div>
    </div>
  )
}
