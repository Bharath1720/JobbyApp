import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt=" website logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </li>
      </ul>
      <div>
        <button className="logout-btn" type="button">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
