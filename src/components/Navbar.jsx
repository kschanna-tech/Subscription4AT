import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#007BFF', color: 'white' }}>
      <Link to="/" style={{ margin: '0 1rem', color: 'white' }}>Home</Link>
      <Link to="/dashboard" style={{ margin: '0 1rem', color: 'white' }}>Dashboard</Link>
      <Link to="/pricing" style={{ margin: '0 1rem', color: 'white' }}>Pricing</Link>
    </nav>
  );
}

export default Navbar;
