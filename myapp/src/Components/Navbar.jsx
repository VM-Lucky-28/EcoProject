// // // import React from 'react';
// // // import { Navbar, Nav } from 'react-bootstrap';

// // // const NavigationBar = ({ onLoginClick }) => {
// // //     return (
// // //         <Navbar bg="dark" variant="dark" expand="lg">
// // //             <Navbar.Brand href="#">Eco Groww</Navbar.Brand>
// // //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
// // //             <Navbar.Collapse id="basic-navbar-nav">
// // //                 <Nav className="ml-auto">
// // //                     <Nav.Link href="/home">Home</Nav.Link>
// // //                     <Nav.Link onClick={onLoginClick}>Login</Nav.Link>
// // //                     <Nav.Link onClick={onSignupClick}>Signup</Nav.Link>
// // //                     <Nav.Link href="/about">About Us</Nav.Link>
// // //                     <Nav.Link href="/services">Services</Nav.Link>
// // //                 </Nav>
// // //             </Navbar.Collapse>
// // //         </Navbar>
// // //     );
// // // };

// // // export default NavigationBar;


// // import React from 'react';
// // import { Navbar, Nav } from 'react-bootstrap';

// // const NavigationBar = ({ onLoginClick, onSignupClick }) => { // Add onSignupClick to props
// //     return (
// //         <Navbar bg="dark" variant="dark" expand="lg">
// //             <Navbar.Brand href="#">Eco Groww</Navbar.Brand>
// //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //             <Navbar.Collapse id="basic-navbar-nav">
// //                 <Nav className="ml-auto">
// //                     <Nav.Link href="/home">Home</Nav.Link>
// //                     <Nav.Link onClick={onLoginClick}>Login</Nav.Link>
// //                     <Nav.Link onClick={onSignupClick}>Signup</Nav.Link>
// //                     <Nav.Link href="/about">About Us</Nav.Link>
// //                     <Nav.Link href="/services">Services</Nav.Link>
// //                 </Nav>
// //             </Navbar.Collapse>
// //         </Navbar>
// //     );
// // };

// // export default NavigationBar;


// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Import Link

// const NavigationBar = () => {
//     return (
//         <Navbar bg="dark" variant="dark" expand="lg">
//             <Navbar.Brand href="#">Eco Groww</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <Nav.Link as={Link} to="/">Home</Nav.Link> // Use Link
//                     <Nav.Link as={Link} to="/loginpage">Login</Nav.Link> // Use Link
//                     <Nav.Link as={Link} to="/signup">Signup</Nav.Link> // Use Link
//                     <Nav.Link as={Link} to="/about">About Us</Nav.Link> // Use Link
//                     <Nav.Link as={Link} to="/services">Services</Nav.Link> 
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default NavigationBar;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './pagelines.svg'
import './Navbar.css'



const NavigationBar = () => {
    return (
        <nav>
        <Navbar bg="white" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/" style={{fontSize:'2rem', fontFamily:'fantasy', background:'white', borderRadius:'5rem'}}>
                <Logo style={{ width: '5rem', height: '2rem',}} />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" style={{color:'black'}} >Home</Nav.Link>
                    <Nav.Link as={Link} to="/loginpage" style={{color:'black'}}  >Login</Nav.Link>
                    <Nav.Link as={Link} to="/signup" style={{color:'black'}}  >Signup</Nav.Link>
                    <Nav.Link as={Link} to="/about" style={{color:'black'}} >About Us</Nav.Link>
                    <Nav.Link as={Link} to="/services"style={{color:'black'}}  >Services</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </nav>
        
    );
};

export default NavigationBar;