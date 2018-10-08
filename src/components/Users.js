import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doGetUsers } from '../actions/Users';

class Users extends Component {

    componentDidMount() {
        this.props.doGetUsers({ url: 'http://10.100.110.120:8080/' });
    }

    render() {

        const { Users } = this.props.UsersData;

        const userList = Users ? (
            Users.map((user) => {
                return (
                    <React.Fragment>
                        {/* <li class="collection-item avatar">
                            <i class="material-icons circle red">play_arrow</i>
                            <span class="title">Title</span>
                            <p>First Line <br>
                                Second Line
                                </p>
                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                        </li> */}
                    </React.Fragment>
                )
            })
        ) : <h2 className={'center'}>Users not found!!</h2>

        return (
            <React.Fragment>
                <h4>Users</h4>
                <ul className="collection">
                    {
                        userList
                    }
                </ul>
            </React.Fragment>
        )
    }
};

const mapToProps = (state, props) => {
    return {
        UsersData: state.Users
    }
}

export default connect(mapToProps, { doGetUsers })(Users);