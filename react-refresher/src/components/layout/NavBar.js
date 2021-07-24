import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';
import FavoritesContext from '../../store/favorites-context';

const NavBar = () => {
    const favCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>My Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">All Meetups</Link></li>
                    <li><Link to="/add-meetup">Add Meetup</Link></li>
                    <li><Link to="/favorites">Favorites</Link>
                        <span className={classes.badge}>{favCtx.favotitesTotal}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;