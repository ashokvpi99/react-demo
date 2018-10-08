import React, { Component } from 'react';

const User = window.localStorage.getItem('userDetails') ? JSON.parse(window.localStorage.getItem('userDetails')) : {};

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Welcome, {User.name}</h4>
                <div className="col s6">
                    <div className="card">
                        <div className="card-content">
                            <p>Name: { User.name }</p>
                            <p>Gender: { User.gender }</p>
                            <p>Date of Birth: { User.dob }</p>
                            <p>Role: { User.roles }</p>
                            <p>Email ID: { User.emailID }</p>
                            <p>Phone No: { User.phoneNo }</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default Dashboard;