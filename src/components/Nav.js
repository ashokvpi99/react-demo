import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    &nbsp; &nbsp;
                    <Link to={'/'} className="brand-logo">User Management</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/login'}>Login</NavLink></li>
                        <li><NavLink to={'/register'}>Register</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;