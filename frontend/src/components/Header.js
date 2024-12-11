import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile-setup">Profile Setup</Link></li>
          <li><Link to="/user-discovery">User Discovery</Link></li>
          <li><Link to="/matchmaking">Matchmaking</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
