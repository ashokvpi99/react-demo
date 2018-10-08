import React, { Component } from 'react';

const User = window.localStorage.getItem('userDetails') ? JSON.parse(window.localStorage.getItem('userDetails')) : {};

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Welcome, {User.data.name}</h4>
                <div className="col s6">
                    <div className="card">
                        <div className="card-content">
                            <p>Name: { User.data.name }</p>
                            <p>Gender: { User.data.gender }</p>
                            <p>Date of Birth: { User.data.dob }</p>
                            <p>Role: { User.data.role }</p>
                            <p>Email ID: { User.data.emailID }</p>
                            <p>Phone No: { User.data.phoneNo }</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default Dashboard;