import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { doLogin } from '../actions/Login';
import Spinner from '../assets/spinner/Spinner';
// import toastify from '../services/toastService';
// import _ from 'lodash';

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let loginData = this.props.loginForm.values;
        this.props.doLogin({data: loginData, url: 'http://10.100.110.120:8080/login'});
    };

    render() {

        const { isLoading, isError, errStr } = this.props.loginData;
        const isLoad = isLoading ? <Spinner active={ this.props.loginData.isLoading } /> : null;

        return (
            <React.Fragment>
                <br /><br />
                <div className="container">
                    <div className="col s12 m5">
                        <div className="card-panel">
                            <form onSubmit={this.handleSubmit}>
                                <div className="container">
                                    <h1>Login</h1>
                                    <p>Please fill the details to login to your account.</p>
                                    <hr />
                                    <div className="row">
                                        <div className="input-field col s8">
                                            <Field component={'input'} type="text" name="emailID" required />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s8">
                                            <Field component={'input'} type="password" name="password" required />
                                            <label htmlFor="psw">Password</label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <button type="submit" className="btn waves-effect waves-light">Login<i className="material-icons right">send</i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    isLoad
                }
                {
                    isError !== null && !errStr ? window.localStorage.setItem('userDetails', JSON.stringify(this.props.loginData.login)) : null
                }
                {
                    window.localStorage.getItem('userDetails') ? this.props.history.push('/dashboard') : null
                }
            </React.Fragment>
        )
    }
}

const loginForm = reduxForm({
    form: 'login' // a unique identifier for this form
})(Login);

const mapToProps = (state, props) => {
    return {
        loginForm: state.form.login,
        loginData: state.Login
    }
};

export default connect(mapToProps, { doLogin })(loginForm);