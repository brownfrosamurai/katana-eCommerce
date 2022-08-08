import { Outlet, Link } from 'react-router-dom'

import { Fragment, useContext } from 'react'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { UserContext } from '../../contexts/user.context'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
