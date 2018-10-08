import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doGetUsers } from '../actions/Users';

class Users extends Component {

    componentDidMount() {
        this.props.doGetUsers({ url: 'http://10.100.110.120:8080/users' });
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
                        <tr key={user.id}>
                        <td>{user.userId}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                        <td>{'-'}</td>
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