import React from 'react'
import {LogOut}  from 'react-feather'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
  const { user } = useAuth();
  return (
    <div id="header--wrapper">
      {user ? (
        <>
          Welcome, {user.name}
          <LogOut className='header--link'/>
       </>
      ) : (
        <button>login</button>
      )}
    </div>
  );
};

export default Header;