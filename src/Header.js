import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';
import { LineAxis } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//ES6 ARROW FUNCTIOn
const Header = ({ backButton }) => {
  const navigate = useNavigate();
  return (
    <div className='header'>

      {backButton ? (
        
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosIcon fontSize='large' className='header__icon' />
        </IconButton>
       
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large"/>
        </IconButton>
      )}

      
      
      <Link to="/">
        <img 
          className="header__logo" 
          src="https://1000logos.net/wp-content/uploads/2022/01/Koo-Chat-Logo.png" 
          alt="tinder logo"
          />
      </Link>
      
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
      
    </div>
  )
}

export default Header;