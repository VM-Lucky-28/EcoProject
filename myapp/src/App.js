// // // import React, { useState } from 'react';
// // // import Home from "./Components/Home";
// // // import NavigationBar from "./Components/Navbar";
// // // import Footer from "./Components/Footer";
// // // import LoginPage from "./Components/LoginPage";

// // // function App() {
// // //   const [isLoginClicked, setLoginClicked] = useState(false);

// // //   const handleLoginClick = () => {
// // //     setLoginClicked(true);
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <NavigationBar onLoginClick={handleLoginClick} />
// // //       {!isLoginClicked && <Home />}
// // //       {isLoginClicked && <LoginPage />}
// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // export default App;



// // // import React, { useState } from 'react';
// // // import Home from "./Components/Home";
// // // import NavigationBar from "./Components/Navbar";
// // // import Footer from "./Components/Footer";
// // // import LoginPage from "./Components/LoginPage";
// // // import SignupPage from './Components/Signup';

// // // function App() {
// // //   const [isLoginClicked, setLoginClicked] = useState(false);
// // //   const [isSignupClicked, setSignupClicked] = useState(false); // New state variable

// // //   const handleLoginClick = () => {
// // //     setLoginClicked(true);
// // //     setSignupClicked(false);
// // //   };

// // //   const handleSignupClick = () => { // New handler
// // //     setSignupClicked(true);
// // //     setLoginClicked(false);
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <NavigationBar onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} /> {/* Pass new handler */}
// // //       {!isLoginClicked && !isSignupClicked && <Home />}
// // //       {isLoginClicked && <LoginPage />}
// // //       {isSignupClicked && <SignupPage />} {/* Render SignupPage when isSignupClicked is true */}
// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // import React, { useState } from 'react';
// // import NavigationBar from './Components/Navbar';
// // import LoginPage from './Components/LoginPage';
// // import SignupPage from './Components/Signup';
// // import Home from './Components/Home';
// // import Footer from './Components/Footer';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch

// // function App() {
// //   const [isLoginClicked, setLoginClicked] = useState(false);
// //   const [isSignupClicked, setSignupClicked] = useState(false);

// //   const handleLoginClick = () => {
// //     setLoginClicked(true);
// //     setSignupClicked(false);
// //   };

// //   const handleSignupClick = () => {
// //     setSignupClicked(true);
// //     setLoginClicked(false);
// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         <NavigationBar onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
// //         <Routes>
// //           <Route path="/LoginPage" element={<LoginPage />} />
// //           <Route path="/Signup" element={<SignupPage />} />
// //           <Route path="/" element={<Home />} exact />
// //         </Routes>
// //         <Home/>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// // In App.js
// import React, { useState } from 'react';
// import NavigationBar from './Components/Navbar';
// import LoginPage from './Components/LoginPage';
// import SignupPage from './Components/Signup';
// import Home from './Components/Home';
// import Footer from './Components/Footer';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   const [isLoginPageActive, setLoginPageActive] = useState(false);

//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/login" element={<LoginPage onMount={() => setLoginPageActive(true)} />} />
//           <Route path="/signup" element={<SignupPage />} />
//           {!isLoginPageActive && <Route path="/" element={<Home />} />}
//         </Routes>
//         <Home/>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import NavigationBar from './Components/Navbar';
import LoginPage from './Components/LoginPage';
// import Button from './Components/Button';
import Farmer from './Components/Farmer';
import SignupPage from './Components/Signup';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/Aboutus';
import Services from './Components/Services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Services from './Components/APIServices';
import FormPage from './Components/Form';

function App() {
  return (   
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/button" element={<Button/>} />  */}
          <Route path="/farmer" element={<Farmer/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/loginpage" element={<LoginPage/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path='/signup' element={<SignupPage />} /> */}
          {/* <Route path="/services" element={<APIServices />} /> */}
          <Route path="/formpage" element={<FormPage/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;