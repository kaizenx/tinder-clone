import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';

//ES6 ARROW FUNCTIOn
const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large"/>
      </IconButton>
      <img 
        className="header__logo" 
        src="https://1000logos.net/wp-content/uploads/2022/01/Koo-Chat-Logo.png" 
        alt="tinder logo"
        />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Header;