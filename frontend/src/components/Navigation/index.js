import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
       <NavLink to="/signup"><button id='sign-up'>Sign Up</button></NavLink>
      </>
    );
  }

  return (
    <div className='navigation'>
      {isLoaded && sessionLinks}
      <NavLink exact to="/"><button id='home'>Home</button></NavLink>
    </div>
  );
}

export default Navigation;