
import { logout } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
      </Link>

      <div>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="sign-out-button"
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
