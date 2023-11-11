import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className='Header'>
            <div className={`wrapper + ${style.wrapper}`}>
                <div className={style.logo}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.auth}>
                    <button className={style.button}>Sign up</button>
                    <button className={style.button}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;