import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function Two() {
  return (
    <div>
        Two
        <ul style={{display: 'flex', listStyle:'none' , justifyContent:'space-around'}}>
            <li>
                <Link to='Three'>Three</Link>
            </li>
            <li>
                <Link to='Four'>Four</Link>
            </li>
            <li>
                <Link to='Five'>Five</Link>
            </li>
            <li>
                <Link to='/'>Log out</Link>
            </li>
        </ul>

             <div> <Outlet/> </div>

    </div>
  )
}

export default Two


// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// function Two() {
//   return (
//     <div>Two
//         <ul style={{display: 'flex', listStyle:'none' , justifyContent:'space-around'}}>
//              <li>
//                  <Link to='Three'>Three</Link>
//              </li>
//              <li>
//                  <Link to='Four'>Four</Link>
//              </li>
//              <li>
//                  <Link to='Five'>Five</Link>
//              <li>
//              </li>
//                  <Link to='/'>Log out</Link>
//              </li>
//          </ul>
//          <div> <Outlet/> </div>
//     </div>
//   )
// }

// export default Two