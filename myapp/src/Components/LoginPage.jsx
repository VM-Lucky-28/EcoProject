// // import React from 'react';
// // import { Container, Form, Button } from 'react-bootstrap';
// // import './LoginPage.css'; // Import the CSS file

// // const LoginPage = () => {
// //     return (
// //         <div className='login-container'>
// //         <Container className="login-container">
// //             <Form className="login-form">
// //                 <h2 className="text-center text-white">Login</h2>
// //                 <Form.Group controlId="formBasicEmail">
// //                     <Form.Label className="text-white">Email address</Form.Label>
// //                     <Form.Control type="email" placeholder="Enter email" />
// //                 </Form.Group>

// //                 <Form.Group controlId="formBasicPassword">
// //                     <Form.Label className="text-white">Password</Form.Label>
// //                     <Form.Control type="password" placeholder="Password" />
// //                 </Form.Group>
// //                 <hr />
// //                 <Button variant="primary" type="submit" className="w-100">
// //                     Log In
// //                 </Button>

// //                 <hr />
// //                 <p style={{textAlign:'center', color:'whitesmoke'}}>Don't Have an Account</p>

// //                 <Button variant="primary" type="submit"  className="w-100">
// //                     Sign Up
// //                 </Button>
// //             </Form>
// //         </Container>
// //         </div>
// //     );
// // };

// // export default LoginPage;


// import React, { useState } from 'react';
// import { Container, Form, Button, Row, Col } from 'react-bootstrap';
// import { ReactComponent as FacebookLogo } from './facebook.svg';

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle form submission here
//     };

//     return (
//         <div style={{background:'black'}}>
//         <Container className="login-container" style={{background:'black', height:'' }}>
//             <Row className="justify-content-md-center">
//                 <Col xs={12} md={6}>
//                     <Form className="login-form" onSubmit={handleSubmit}>
//                         <h2 className="text-center text-white">Login</h2>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label className="text-white">Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label className="text-white">Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         </Form.Group>
//                         <hr />
//                         <Button variant="primary" type="submit" className="w-100">
//                             Log In
//                         </Button>
//                         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
//                             <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }}>
//                                 <FacebookLogo style={{ width: '100%', height: '100%' }} />
//                             </div>
//                         </div>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//         </div>
//     );
// }

// export default LoginPage;



import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { ReactComponent as FacebookLogo } from './facebook.svg';
import { ReactComponent as GoogleLogo } from './google-plus.svg';
import {ReactComponent as PinterestLogo} from './pinterest.svg';
import { Link } from 'react-router-dom';
import './Home.css';

function LoginPage({ onMount }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        if (onMount) {
          onMount();
        }
      }, [onMount]);

    const handleSubmit = (event) => {
        event.preventDefault();

        
        
        let isValid = true;

        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            // Handle form submission here
        }
        
    };
    

    return (
        <div style={{
            position: 'relative', 
            background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23000000\' fill-opacity=\'1\' d=\'M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundSize: 'cover',
            animation: 'wave 3s ease infinite'
        }}>
        
        <Container className="login-container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
            <Row className="justify-content-md-center">
                    <Card className="info-card" style={{ transition: '0.3s' , height:'37rem', width:'37rem'}} >
                        <Card.Body>
                            <Form className="login-form" onSubmit={handleSubmit}>
                                <h2 className="text-center">Login</h2>
                                <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} isInvalid={!!emailError} />
            <Form.Control.Feedback type='invalid'>{emailError}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} isInvalid={!!passwordError} />
            <Form.Control.Feedback type='invalid'>{passwordError}</Form.Control.Feedback>
        </Form.Group>
                                <hr />
                                <Button variant="primary" type="submit" className="w-100">
                                    Log In
                                </Button>
                                <br />
                                <Link>Forgot Password</Link>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
    <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://www.facebook.com'}>
        <FacebookLogo style={{ width: '100%', height: '100%' }} />
    </Button>
    <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://accounts.google.com/Login'}>
        <GoogleLogo style={{ width: '100%', height: '100%' }} />
    </Button>
    <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://www.pinterest.com/login/'}>
        <PinterestLogo style={{ width: '100%', height: '100%' }} />
    </Button>
</div>
</div>
<hr />
                                <Row className="justify-content-md-center">
                                    <p style={{textAlign:'center'}}>Dont Have Account</p>
                                    <div>
                {/* ... */}
                <button variant="primary" type="submit" className="w-100">
                <Link to="/Signup" className="btn btn-link" style={{textDecoration:'none',}}>Signup</Link> </button>
                {/* ... */}
            </div>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
            </Row>
        </Container>
    </div>
        
    );
}

export default LoginPage;