import React from 'react';
import s from './Classnav.module.css';
console.log(s);
const Nav = () => {
    return <nav className={s.classNav}>
        <div className = {`${s.items} ${s.active}`}>Profile</div>
        <div className = {s.items}> Messges</div>
        <div className = {s.items}>News</div>
        <div className = {s.items}>Music</div>
        <div className = {s.items}> Settings</div>

    </nav>
};

export default Nav;