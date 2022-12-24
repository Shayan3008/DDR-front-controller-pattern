import React from 'react'
import './Signup.css'
import Loginimage from "../../assets/Loginimage.svg"
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <div className="Signup">
        <div className="Signupleft">
                <div>
                <img src={Loginimage} className='Shoppingimage'  alt="Logo Image" ></img>  
                </div>
        </div>
        <div className="Signupright">
            <img src={Logo}  className='Logo' alt="Logo" ></img>
            <p>Welcome</p>
            <h2>Sign up to Shopping</h2>
            <div class="mb-4" >
            <label  class="form-label">Email</label>
            <input type="email" class="form-control" id="adminemail" placeholder="John.snow@gmail.com" />
            </div>
            <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password" class="form-control" id="adminpassword" placeholder="*********" />
            </div>
            <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="adminpassword" placeholder="*********" />
            </div>
            <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-primary" type="button"><Link to="/advertisment" className='Signupbutton'>Sign up</Link></button>
            </div>
            <div className="signin">Already have an account? <Link to="/login" className='linktosignin' >Sign in</Link> </div>
        </div>
    </div>
    
   
  )
}
