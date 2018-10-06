import React, { Component } from "react";

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            gender: '',
            dob: '',
            mobileNo: '',
            email: '',
            psw: '',
            pswrepeat: ''
        };
    }

    onChangeState = (e) => {
        var { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('this.state......', this.state)
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
                                    <h1>Register</h1>
                                    <p>Please fill in this form to create an account.</p>
                                    <hr />
                                    <div className="row">
                                        <div className="input-field col s10">
                                            <input type="text" name="name" onChange={this.onChangeState} required />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s10" style={{marginBottom: 10}}>
                                            <label>Gender</label>
                                            <select name={'gender'} defaultValue={''} onChange={this.onChangeState}>
                                                <option value="" disabled>Choose your gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s10">
                                            <input type="text" name={'dob'} onSelect={this.onChangeState} className="datepicker" />
                                            <label htmlFor="dob">Date of Birth</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s10">
                                            <input type="text" onChange={this.onChangeState} name="mobileNo" required />
                                            <label htmlFor="phoneno">Mobile Number</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s10">
                                            <input type="text" onChange={this.onChangeState} name="email" required />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s10">
                                            <input type="password" onChange={this.onChangeState} name="psw" required />
                                            <label htmlFor="psw">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s10">
                                            <input type="password" onChange={this.onChangeState} name="pswrepeat" required />
                                            <label htmlFor="psw-repeat">Repeat Password</label>
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