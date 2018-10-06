import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         email: '',
    //         psw: ''
    //     };
    // }
    //
    // onChangeSetState = (e) => {
    //     const { name, value } = e.target;
    //     this.setState({
    //         [name]: value
    //     })
    // };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('loginForm....', this.props.loginForm.values)
    };
    render() {
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
                                            <Field component={'input'} type="text" name="email" required />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s8">
                                            <Field component={'input'} type="password" name="psw" required />
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
            </React.Fragment>
        )
    }
}

const loginForm = reduxForm({
    form: 'login' // a unique identifier for this form
})(Login);

const mapToProps = (state, props) => {
    return {
        loginForm: state.form.login
    }
};

export default connect(mapToProps)(loginForm);