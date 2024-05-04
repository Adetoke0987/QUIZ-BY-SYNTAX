import React, { useState } from 'react';
import './Input.css';

import Mail from '../../assets/mail.png';
import Key from '../../assets/key.png';
import { Link } from 'react-router-dom/dist';

const Input = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      password: '',
      email: ''
    });
  };

  return (
    <div className='all_input'>
      <form id="container" onSubmit={handleSubmit}>
        <div className="inputEU">
          <div className="email">
            <label htmlFor="email">
              <span><img src={Mail} alt="" /></span>
              <input
                type="email"
                placeholder=" Type your email"
                name="email"
                id='email'
                value={formData.email}
                onChange={handleChange}
              />
              
            </label>
          </div>
          <div className="password">
            <label htmlFor="password">
              <span><img id='key' src={Key} alt="" /></span>
              <input
                type="password"
                placeholder="Type your password" 
                id='password'
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            
            </label>
          </div>
        </div>
        <div>
        <Link to= '/userdashboard'><button id='sub'>Submit</button> </Link>
        </div>
        
        <p id='dont'>Don't have an account? <span><Link to= '/signin'>Sign Up</Link></span></p>
      </form>
    </div>
  );
}

export default Input;

