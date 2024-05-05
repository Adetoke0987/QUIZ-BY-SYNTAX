
// import React from 'react';
// import { RouterProvider } from 'react-router-dom';
// import router from './router.jsx';


// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
  
//     </div>
//   );
// };

// export default App;


import { UserProvider } from './context/UserContext'
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';


const App = () => {
  return (
    <div>
      <UserProvider>
      <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
};

export default App;



