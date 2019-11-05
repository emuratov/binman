import React from 'react';
import logo from './img/logo.svg';


    function Header(){
    return(
    <div className = "header">
        <img className = "logo" src={logo} alt="logo"/>
    </div>
    )
    }
export default Header;