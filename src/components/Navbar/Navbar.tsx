
import './Navbar.css';
import { useUser } from '../UserContext/UserContext';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  // State to simulate user login
   const{user} =useUser()
console.log(user);

  // Simulated user profile


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <NavLink to={'/users'}>users</NavLink>
      </div>
      <div className="navbar-right">
        {user?.email ? (
          <div className="user-profile">
            <img src={user.photo} alt="Profile" className="profile-picture" />
            <span>{user.name}</span>
          </div>
        ) : (
          <button className="login-btn">
            <Link to={'/login'}>log in</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
