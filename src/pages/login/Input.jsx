// import React, { useState } from 'react';
// import './Input.css';

// import Mail from '../../assets/mail.png';
// import Key from '../../assets/key.png';
// import { Link } from 'react-router-dom/dist';

// const Input = () => {
//   const [formData, setFormData] = useState({
//     password: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//       password: '',
//       email: ''
//     });
//   };

//   return (
//     <div className='all_input'>
//       <form id="container" onSubmit={handleSubmit}>
//         <div className="inputEU">
//           <div className="email">
//             <label htmlFor="email">
//               <span><img src={Mail} alt="" /></span>
//               <input
//                 type="email"
//                 placeholder=" Type your email"
//                 name="email"
//                 id='email'
//                 value={formData.email}
//                 onChange={handleChange}
//               />
              
//             </label>
//           </div>
//           <div className="password">
//             <label htmlFor="password">
//               <span><img id='key' src={Key} alt="" /></span>
//               <input
//                 type="password"
//                 placeholder="Type your password" 
//                 id='password'
//                 value={formData.password}
//                 onChange={handleChange}
//                 name="password"
//               />
            
//             </label>
//           </div>
//         </div>
//         <div>
//         <Link to= '/userdashboard'><button id='sub'>Submit</button> </Link>
//         </div>
        
//         <p id='dont'>Don't have an account? <span><Link to= '/signin'>Sign Up</Link></span></p>
//       </form>
//     </div>
//   );
// }

// export default Input;


import React, { useState } from 'react';
import './Input.css';
import axios from 'axios';
import Mail from '../../assets/mail.png';
import Key from '../../assets/key.png';
import { Link } from 'react-router-dom'; 



const Input = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: ''
  });
  const [loading, setLoading] = useState(false); // State for loading animation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation
    try {
      const response = await axios.post(
        'https://questionsapi.onrender.com/auth/login',
        formData
      );
      const token = response.data.data.token;
      localStorage.setItem('token', token);
      console.log('Sign In successful:', token);
      // Redirect to dashboard after successful login
      setTimeout(() => {
        window.location.href = '/dashboard'; // Redirect to dashboard after successful login
      }, 1000); // Adjust the delay as needed
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className='all_input'>
      {loading && <Loading />} {/* Render loading animation when loading is true */}
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
        <Link to= '/userdashboard'><button id='sub' disabled={loading}>Submit</button> </Link>
      </form>
      <p id='dont'>Don't have an account? <span><Link to='/signin'>Sign Up</Link></span></p>
    </div>
  );
};

export default Input;

