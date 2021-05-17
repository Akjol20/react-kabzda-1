import React, {}  from "react";
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
  return(
  <nav className={s.nav}>
  <div className={s.item}>
  <NavLink to='/profile' activeClassName={s.activeLink}><i>Profile</i></NavLink>
  </div>
  <div className={`${s.item} ${s.active}`}>
  <NavLink to='/dialogs' activeClassName={s.activeLink}><i>Messages</i></NavLink>
  </div>
  <div className={s.item}>
  <NavLink to='/news' activeClassName={s.activeLink}><i>News</i></NavLink>
  </div>
  <div className={s.item}>
  <NavLink to='/books' activeClassName={s.activeLink}><i>Books</i></NavLink>
  </div>
  <div className={s.item}>
  <NavLink to='/video' activeClassName={s.activeLink}><i>Video</i></NavLink>
  </div>
  <div className={s.item}>
  <NavLink to='/users' activeClassName={s.activeLink}><i>Users</i></NavLink>
  </div>
  </nav>)

}

export default Navbar;
