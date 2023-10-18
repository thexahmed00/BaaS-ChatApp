import React from 'react'
import {LogOut}  from 'react-feather'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
  const { user,handleLogout } = useAuth();
  return (
    <div id="header--wrapper">
      {user ? (
        <>
          <p><span>Welcome, </span>{user.name}</p>
          <LogOut onClick={handleLogout} className='header--link'/>
       </>
      ) : (
        <button>login</button>
      )}
    </div>
  );
};

export default Header;