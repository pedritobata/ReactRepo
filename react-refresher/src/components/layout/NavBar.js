import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>My Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">All Meetups</Link></li>
                    <li><Link to="/add-meetup">Add Meetup</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;