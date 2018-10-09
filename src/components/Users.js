import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doGetUsers } from '../actions/Users';

class Users extends Component {

    componentDidMount() {
        const userObj = window.localStorage.getItem('userDetails') && JSON.parse(window.localStorage.getItem('userDetails'));

        if(userObj && userObj.roles !== 'manager')
            this.props.doGetUsers({ url: 'http://10.100.110.120:8080/users' });
        else
            this.props.doGetUsers({ url: 'http://10.100.110.120:8080/manager/users/' + userObj.userId });   
    }

    render() {

        const { users } = this.props.UsersData;
        const userList = users.length ? (
                <table className="highlight responsive-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Roles</th>
                    </tr>
                    </thead>
                    <tbody>
                    { users.map((user) => {
                        return (
                        <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.emailID}</td>
                        <td>{user.phoneNo}</td>
                        <td>{user.roles}</td>
                        </tr>
                        )
                    }) }
                    </tbody>
                </table>
        ) : <h4 className={'center'}>Users not found!!</h4>;

        return (
            <div className={'container'}>
                <div>
                <h4>Users</h4>
                <hr />
                </div>
                <div className={'card-panel'}>
                    { userList }
                </div>
            </div>
        )
    }
}

const mapToProps = (state, props) => {
    return {
        UsersData: state.Users
    }
};

export default connect(mapToProps, { doGetUsers })(Users);