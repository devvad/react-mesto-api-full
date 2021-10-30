import logo from '../images/header/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';



function Header (props) {
  const newPath = props.path === '/' || props.path === '/sign-up' ? '/sign-in' : '/sign-up';
  const linkName = {'/': 'Выйти', '/sign-up': 'Войти', '/sign-in': 'Регистрация'}
  const handleLogout = () => {props.onLogout()};

return (
<div className="header">
<img src={logo} alt="логотип" className="header__logo" />
{props.path === '/' ? <div className="header__menu">
  <p className="header__link header__link_type_email">{props.userEmail}</p>
  <Link className="header__link header__link_type_exit" to={newPath} onClick={handleLogout}>
    {linkName[props.path]}
  </Link>
  </div> :
    <Link className="header__link" to={newPath}>
      {linkName[props.path]}
    </Link>
  }
  </div>
)
}

export default Header;
