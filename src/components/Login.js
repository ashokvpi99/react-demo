import React from 'react';

const Login = (props) => {
    return (
        <React.Fragment>
            <br /><br />
            <div className="container">
                <div className="col s12 m5">
                    <div className="card-panel">
                        <form>
                            <div className="container">
                                <h1>Login</h1>
                                <p>Please fill the details to login to your account.</p>
                                <hr />
                                <div className="row">
                                    <div className="input-field col s8">
                                        <input type="text" name="email" required />
                                        <label htmlFor="email"><b>Email</b></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s8">
                                        <input type="password" name="psw" required />
                                        <label htmlFor="psw"><b>Password</b></label>
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

export default Login;