import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
const Header = (props) =>{
    return  <header className={s.header}>
    <img src ="https://yt3.ggpht.com/ytc/AAUvwniDgAlzBqCn6wvhvvKy72qvBAcczlmWCkPQvn_Z=s900-c-k-c0x00ffffff-no-rj" />
    <div className={s.loginBlock}>
     { props.isAuth
     ? <div>{props.login} - <button onClick={props.logout}>Выйти из аккаунта</button> </div>
     : <NavLink to='/login'>Войти в аккаунт</NavLink>}
    </div>
  </header>
}
export default Header;