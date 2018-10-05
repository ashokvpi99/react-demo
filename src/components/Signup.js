import React,{Component} from "react";

class Signup extends Component{
    render(){       
        return(
           <div>
                <form onChange={(e) => {
                    this.props.Addusers(e);
                }} required>
            <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="pswrepeat" required />
            <label htmlFor="phoneno"><b>Phone Number</b></label>
            <input type="text" placeholder="Enter Phone Number" name="phoneno" required />
            <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.</p>
            <div className="clearfix">
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
    </div>
        )
    }
}
export default Signup;