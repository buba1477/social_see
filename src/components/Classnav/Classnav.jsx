import React from 'react';
import s from './Classnav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return <nav className={s.classNav}>
        <div className={`${s.items} ${s.active}`}>
            <NavLink to ='/profile' activeClassName={s.activel}>Profile</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to ='/messages' activeClassName={s.activel}>Messges</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to ='/news' activeClassName={s.activel}>News</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to ='/musik' activeClassName={s.activel}>Music</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/setiings' activeClassName={s.activel}>Settings</NavLink>
        </div>





        <div className={s.items}>
            <NavLink to='/friends' activeClassName={s.activel} className={s.ite}>Friends</NavLink>
        </div>

    </nav>
};

export default Nav;