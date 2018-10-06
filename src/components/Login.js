import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            psw: ''
        };
    }

    onChangeSetState = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('this.state...', this.state);
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
                                            <input type="text" name="email" onChange={this.onChangeSetState} required />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s8">
                                            <input type="password" onChange={this.onChangeSetState} name="psw" required />
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

export default Login;