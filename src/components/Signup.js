import React, { Component } from "react";

class Signup extends Component {

    render() {
        return (
            <React.Fragment>
                <br /><br />
                <div className="container">
                    <div className="col s12 m5">
                        <div className="card-panel">
                            <form>
                                <div className="container">
                                    <h1>Register</h1>
                                    <p>Please fill in this form to create an account.</p>
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
                                    <div className="row">
                                        <div className="input-field col s8">
                                            <input type="password" name="pswrepeat" required />
                                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s8">
                                            <input type="text" name="phoneno" required />
                                            <label htmlFor="phoneno"><b>Phone Number</b></label>
                                        </div>
                                    </div>
                                    <p>By creating an account you agree to our <a style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
                                    <div className="clearfix">
                                        <button type="submit" className="btn waves-effect waves-light">Sign Up<i className="material-icons right">send</i></button>
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
export default Signup;