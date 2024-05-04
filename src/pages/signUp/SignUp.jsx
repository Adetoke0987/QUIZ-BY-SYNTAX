import React from 'react';
import LoginImage from '../../assets/imageLogin.png'
import './signup.css';
import Admin from '../../assets/dashicons_admin-users.png';
import Users from '../../assets/Vector.png';
import Input from './Input';

const SignUp = () => {
    return (
        <div className='login'>
            <div className="right">
                <div className="logo_adpart">
                    <div id="logo"><h3>SYNTAX LOGO</h3></div>
                    <div className="admin_part">
                        <button className="admin">
                            <img id='adminImg' src={Admin} alt="" />
                            <h4 id='sign'>Sign in as Admin</h4>
                        </button>

                        <button className="part">
                            <img id='userImg' src={Users} alt="" />
                            <h4 id='sign'>Sign in as Participant</h4>
                        </button>
                    </div>
                </div>
                <div className="input"><Input  /></div>
            </div>

            <div className="left">
                <img id='image' src={LoginImage} alt="" />
            </div>

        </div>
    )
}

export default SignUp;








