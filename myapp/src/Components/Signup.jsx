// // import React from 'react';
// // import { Container, Form, Button } from 'react-bootstrap';
// // import './Signup.css'; // Import the CSS file

// // const SignupPage = () => {
// //     return (
// //         <Container className="signup-container">
// //             <Form className="signup-form">
// //                 <h2 className="text-center text-white">Sign Up</h2>
// //                 <Form.Group controlId="formBasicEmail">
// //                     <Form.Label className="text-white">Email address</Form.Label>
// //                     <Form.Control type="email" placeholder="Enter email" />
// //                 </Form.Group>

// //                 <Form.Group controlId="formBasicPassword">
// //                     <Form.Label className="text-white">Password</Form.Label>
// //                     <Form.Control type="password" placeholder="Password" />
// //                 </Form.Group>

// //                 <Form.Group controlId="formBasicConfirmPassword">
// //                     <Form.Label className="text-white">Confirm Password</Form.Label>
// //                     <Form.Control type="password" placeholder="Confirm Password" />
// //                 </Form.Group>
// //                 <hr />
// //                 <Button variant="primary" type="submit" className="w-100">
// //                     Sign Up
// //                 </Button>
// //             </Form>
// //         </Container>
// //     );
// // };

// // export default SignupPage;

// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';

// function SignupPage() {
//     const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         let isValid = true;
//         let errors = {};

//         if (!formData.email) {
//             isValid = false;
//             errors.email = 'Email is required.';
//         }

//         if (!formData.password || formData.password.length < 6) {
//             isValid = false;
//             errors.password = 'Password must be at least 6 characters.';
//         }

//         if (formData.password !== formData.confirmPassword) {
//             isValid = false;
//             errors.confirmPassword = 'Passwords do not match.';
//         }

//         setErrors(errors);

//         if (isValid) {
//             // Submit form
//         }
//     };

//     return (
//         <div style={{background:'black'}}>
            
//             <Container style={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <Form className="login-form" onSubmit={handleSubmit} style={{ color: 'white', width: '300px' }}>
//                 <h2 className="text-center">Sign Up</h2>
//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
//                     <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} isInvalid={!!errors.password} />
//                     <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
//                 </Form.Group>

//                     <Form.Group controlId="formBasicConfirmPassword">
//                         <Form.Label style={{color:'whitesmoke'}}>Confirm Password</Form.Label>
//                         <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} isInvalid={!!errors.confirmPassword} />
//                         <Form.Control.Feedback type='invalid'>{errors.confirmPassword}</Form.Control.Feedback>
//                     </Form.Group>
//                     <hr />
//                     <Button variant="primary" type="submit" className="w-100">Sign Up</Button>
//                 </Form>
//         </Container>
//         </div>
//     );
// }

// export default SignupPage;



import React, { useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { ReactComponent as FacebookLogo } from './facebook.svg';
import { ReactComponent as GoogleLogo } from './google-plus.svg';
import {ReactComponent as PinterestLogo} from './pinterest.svg';
import './Home.css'

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
        // Add your signup logic here
    };

    return (
        <div style={{
            position: 'relative', 
            background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23000000\' fill-opacity=\'1\' d=\'M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',            backgroundSize: 'cover',
            animation: 'wave 3s ease infinite'
        }}>
        <Container className="login-container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
            <Row className="justify-content-md-center">
                    <Card className="info-card" style={{ transition: '0.3s' , height:'35rem', width:'35rem'}} >
                        <Card.Body>
                            <Form className="login-form" onSubmit={handleSubmit}>
                                <h2 className="text-center">Sign Up</h2>
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
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={(e) => (e.target.value)} isInvalid={!!passwordError} />
            <Form.Control.Feedback type='invalid'>{confirmPasswordError}</Form.Control.Feedback>
        </Form.Group>
                                <hr />
                                <Button variant="primary" type="submit" className="w-100">
                                    Sign Up
                                </Button>
                                <hr />
                                <h4 style={{textAlign:'center'}}>Sign Up with</h4>
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
<hr />
                                
                            </Form>
                        </Card.Body>
                    </Card>
            </Row>
        </Container>
    </div>
    );
}

export default SignupPage;