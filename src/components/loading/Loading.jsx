// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import './loading.css'

// const Loading = () => {
//   useEffect(() => {
//     const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
//     tl.to('.loading-circle', { duration: 0.6, scale: 0.8 })
//       .to('.loading-circle', { duration: 0.6, scale: 1 });
    
//     return () => {
//       tl.kill(); 
//     };
//   }, []);

//   return (
//     <div className="loading">
//       <svg className="loading-circle" viewBox="0 0 100 100"> 
//         <circle cx="30" cy="30" r="10" fill="none" strokeWidth="8" stroke="#007bff"></circle>
//       </svg>
//     </div>
//   );
// };

// export default Loading;


import React, { useState } from 'react';
import './loading.css'; // Import your CSS file for styling

const Loading = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        // Simulate a loading process (you can replace this with your actual asynchronous logic)
        setTimeout(() => {
            setLoading(false);
            alert('Form submitted!'); // Example: Show alert after loading completes
        }, 3000); // Simulate 3 seconds loading time
    };

    return (
        <div className="loader-container">
            <button onClick={handleClick} disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
            </button>
            {loading && <div className="loader"></div>}
        </div>
    );
};

export default Loading;

