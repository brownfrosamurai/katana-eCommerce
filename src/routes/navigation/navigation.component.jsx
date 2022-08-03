import { Outlet, Link } from 'react-router-dom'
// Link component behaves like anchor tags but withhelp from react router dom instead 
import { Fragment } from 'react'

import './navigation.styles.scss'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

const Navigation = () => {
  return (
    // Use a fragment because it renders to nothing when mounted on the DOM
    // useful if you do not want to render some specific html 
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to="/">
          <CrownLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      {/* the outlet react component ensures that the navigation sticks across all pages  */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation