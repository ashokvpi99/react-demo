import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Nav extends Component {

    render() {
        const userInfo = window.localStorage.getItem('userDetails');
        const userDetails = window.localStorage.getItem('userDetails') ? (
            <React.Fragment>
                <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                {
                    userInfo.role === 'admin' ?  <li><NavLink to={'/users'}>Users</NavLink></li> : null

                }
                <li onClick={(e) => {
                    e.preventDefault();
                    window.localStorage.clear();
                }}><NavLink to={'/login'}>Logout</NavLink></li>
            </React.Fragment>
        ) : (
                <React.Fragment>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><a href={'/register'}>Register</a></li>
                </React.Fragment>
            );

        return (
            <nav>
                <div className="nav-wrapper">
                    &nbsp; &nbsp;
                    <Link to={'/'} className="brand-logo">User Management</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {userDetails}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav);