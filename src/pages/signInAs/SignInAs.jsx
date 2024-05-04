import React from 'react';
import LoginImage from '../../assets/imageLogin.png'
import './signInAs.css';
import Admin from '../../assets/dashicons_admin-users.png';
import Users from '../../assets/Vector.png';
import { Link } from 'react-router-dom/dist';
const SignInAs = () => {
    return (
        <div className='login'>
            <div className="right">
                <div className="logo_adpart">
                    <div id="logo"><h3>SYNTAX LOGO</h3></div>
                    <div className="admin_part">
                        <button className="admin">
                            <img id='adminImg' src={Admin} alt="" />
                            <Link to='/login'><h4 id='sign'>Sign in as Admin</h4></Link>
                        </button>

                        <button className="part">
                            <img id='userImg' src={Users} alt="" />
                            <Link to='/login'><h4 id='sign'>Sign in as Participant</h4></Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="left">
                <img id='image' src={LoginImage} alt="" />
            </div>

        </div>
    )
}

export default SignInAs;








