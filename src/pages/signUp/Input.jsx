import React, { useState } from 'react';
import './Input.css'; 

import Mail from '../../assets/mail.png';
import Key from '../../assets/key.png';
import ID from '../../assets/d-card.png'

const Input = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: '',
    fullName:''
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
      email: '',
      fullName:''
    });
  };

  return (
    <div className='all_input'>
      <form id="container" onSubmit={handleSubmit}>
        <div className="inputEU"><div className="fullName">
            <label htmlFor="FullName">
              <span><img src={ID} alt="" /></span>
              <input
                type="text"
                placeholder=" Type your FullName"
                name="fullName"
                id='fullName'
                value={formData.fullName}
                onChange={handleChange}
              />

            </label>
          </div>
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
        <button id='sub'>Submit</button>
      </form>
    </div>
  );
}

export default Input;
