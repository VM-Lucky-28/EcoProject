// // // import React from 'react';
// // // import { Container, Form, Button } from 'react-bootstrap';
// // // import './LoginPage.css'; // Import the CSS file

// // // const LoginPage = () => {
// // //     return (
// // //         <div className='login-container'>
// // //         <Container className="login-container">
// // //             <Form className="login-form">
// // //                 <h2 className="text-center text-white">Login</h2>
// // //                 <Form.Group controlId="formBasicEmail">
// // //                     <Form.Label className="text-white">Email address</Form.Label>
// // //                     <Form.Control type="email" placeholder="Enter email" />
// // //                 </Form.Group>

// // //                 <Form.Group controlId="formBasicPassword">
// // //                     <Form.Label className="text-white">Password</Form.Label>
// // //                     <Form.Control type="password" placeholder="Password" />
// // //                 </Form.Group>
// // //                 <hr />
// // //                 <Button variant="primary" type="submit" className="w-100">
// // //                     Log In
// // //                 </Button>

// // //                 <hr />
// // //                 <p style={{textAlign:'center', color:'whitesmoke'}}>Don't Have an Account</p>

// // //                 <Button variant="primary" type="submit"  className="w-100">
// // //                     Sign Up
// // //                 </Button>
// // //             </Form>
// // //         </Container>
// // //         </div>
// // //     );
// // // };

// // // export default LoginPage;


// // // import React, { useState } from 'react';
// // // import { Container, Form, Button, Row, Col } from 'react-bootstrap';
// // // import { ReactComponent as FacebookLogo } from './facebook.svg';

// // // function LoginPage() {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');

// // //     const handleSubmit = (event) => {
// // //         event.preventDefault();
// // //         // Handle form submission here
// // //     };

// // //     return (
// // //         <div style={{background:'black'}}>
// // //         <Container className="login-container" style={{background:'black', height:'' }}>
// // //             <Row className="justify-content-md-center">
// // //                 <Col xs={12} md={6}>
// // //                     <Form className="login-form" onSubmit={handleSubmit}>
// // //                         <h2 className="text-center text-white">Login</h2>
// // //                         <Form.Group controlId="formBasicEmail">
// // //                             <Form.Label className="text-white">Email address</Form.Label>
// // //                             <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
// // //                         </Form.Group>

// // //                         <Form.Group controlId="formBasicPassword">
// // //                             <Form.Label className="text-white">Password</Form.Label>
// // //                             <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // //                         </Form.Group>
// // //                         <hr />
// // //                         <Button variant="primary" type="submit" className="w-100">
// // //                             Log In
// // //                         </Button>
// // //                         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
// // //                             <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }}>
// // //                                 <FacebookLogo style={{ width: '100%', height: '100%' }} />
// // //                             </div>
// // //                         </div>
// // //                     </Form>
// // //                 </Col>
// // //             </Row>
// // //         </Container>
// // //         </div>
// // //     );
// // // }

// // // export default LoginPage;



// // import React, { useState } from 'react';
// // import { useEffect } from 'react';
// // import { useHistory } from 'react-router-dom';
// // import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
// // import { ReactComponent as FacebookLogo } from './facebook.svg';
// // import { ReactComponent as GoogleLogo } from './google-plus.svg';
// // import {ReactComponent as PinterestLogo} from './pinterest.svg';
// // import { Link } from 'react-router-dom';
// // import LoginService from "../BackendServices/LoginService";
// // import './Home.css';

// // function LoginPage() {
// //     const [LoginPageCreds, setLoginPageCreds] = useState({
// //         id:"",
// //         email:"",
// //         password:"",
// //     });

// //     const [submitted, setSubmitted] = useState(false);
// //     const [error, setError] = useState(false);


// //     const email = LoginPageCreds.email;
// //     const password = LoginPageCreds.password;
    


// //     const handleChange = (field, value) => {
// //         setLoginPageCreds((prevLoginPageCreds) => ({...prevLoginPageCreds, [field]: value}));
// //     }

    
           
// //     const validateEmail = (email) => {
// //         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         return regex.test(email);
// //       }

// //     const validatePassword = (password) => {
// //         // Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number
// //         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// //         return regex.test(password);
// //       }
      


// //       const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if (email === '' || password === '') {
// //             setError(true);
// //         } else {
// //             setSubmitted(true);
// //             setError(false);
// //         }
// //         LoginService.saveLoginPageCreds(LoginPageCreds).then((response) => {
// //             console.log(response);
// //         })
// //         .catch((error) => {
// //             console.log(error);
// //         });




// //     // const [email, setEmail] = useState('');
// //     // const [password, setPassword] = useState('');
// //     // const [emailError, setEmailError] = useState('');
// //     // const [passwordError, setPasswordError] = useState('');

// //     // useEffect(() => {
// //     //     if (onMount) {
// //     //       onMount();
// //     //     }
// //     //   }, [onMount]);

// //     // const handleSubmit = (event) => {
// //     //     event.preventDefault();

        
        
// //     //     let isValid = true;

// //     //     if (!email) {
// //     //         setEmailError('Email is required');
// //     //         isValid = false;
// //     //     } else {
// //     //         setEmailError('');
// //     //     }

// //     //     if (!password) {
// //     //         setPasswordError('Password is required');
// //     //         isValid = false;
// //     //     } else {
// //     //         setPasswordError('');
// //     //     }

// //     //     if (isValid) {
// //     //         // Handle form submission here
// //     //     }
// //     // };
        
    
    

// //     return (
// //         <div style={{
// //             position: 'relative', 
// //             background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23000000\' fill-opacity=\'1\' d=\'M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
// //             backgroundSize: 'cover',
// //             animation: 'wave 3s ease infinite'
// //         }}>
        
// //         <Container className="login-container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //             <Row className="justify-content-md-center">
// //                     <Card className="info-card" style={{ transition: '0.3s' , height:'37rem', width:'37rem'}} >
// //                         <Card.Body>
// //                             <Form className="login-form" onSubmit={handleSubmit}>
// //                                 <h2 className="text-center">Login</h2>
// //                                 <Form.Group controlId="formBasicEmail">
// //             <Form.Label>Email</Form.Label>
// //             <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => handleChange("email",e.target.value)}/>
// //             {!validateEmail(email) && email && <p style={{color: 'red'}}>Please enter a valid email</p>} 
// //             {/* <Form.Control.Feedback type='invalid'>{emailError}</Form.Control.Feedback> */}
// //         </Form.Group>
          
// //         <Form.Group controlId="formBasicPassword">
// //             <Form.Label>Password</Form.Label>
// //             <Form.Control type="password" placeholder="Password" value={password} onChange={(e) =>handleChange("password",e.target.value)}/> 
// //             {!validateEmail(password) && password && <p style={{color: 'red'}}>Please enter a valid password</p>}
// //             {/* <Form.Control.Feedback type='invalid'>{passwordError}</Form.Control.Feedback> */}
// //         </Form.Group>
// //                                 <hr />
// //                                 <Link to="/farmer">
// //                                     <Button variant="primary" type="submit" className="w-100">Log In</Button>
// //                                 </Link>
// //                                 <br />
// //                                 <Link>Forgot Password</Link>
// //                                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
// //                                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
// //     <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://www.facebook.com'}>
// //         <FacebookLogo style={{ width: '100%', height: '100%' }} />
// //     </Button>
// //     <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://accounts.google.com/Login'}>
// //         <GoogleLogo style={{ width: '100%', height: '100%' }} />
// //     </Button>
// //     <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://www.pinterest.com/login/'}>
// //         <PinterestLogo style={{ width: '100%', height: '100%' }} />
// //     </Button>
// // </div>
// // </div>
// // <hr />
// //                                 <Row className="justify-content-md-center">
// //                                     <p style={{textAlign:'center'}}>Dont Have Account</p>
// //                                     <div>
// //                 {/* ... */}
// //                 <button variant="primary" type="submit" className="w-100">
// //                 <Link to="/Signup" className="btn btn-link" style={{textDecoration:'none',}}>Signup</Link> </button>
// //                 {/* ... */}
// //             </div>
// //                                 </Row>
// //                             </Form>
// //                         </Card.Body>
// //                     </Card>
// //             </Row>
// //         </Container>
// //     </div>
        
// //     );
// //     }
// // }

// // export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Card, Form, Button } from 'react-bootstrap';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const errors = validate();
//         setErrors(errors);
//         if (Object.keys(errors).length === 0) {
//             // Perform the login operation here
//             try {
//                 const response = await fetch('https://your-api-url.com/login', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ email, password })
//                 });

//                 if (response.ok) {
//                     // If successful, redirect to the home page
//                     navigate('/');
//                 } else {
//                     // Handle error
//                     const errorData = await response.json();
//                     setErrors({ api: errorData.message });
//                 }
//             } catch (error) {
//                 // Handle network error
//                 setErrors({ api: 'Network error' });
//             }
//         }
//     };

//     const validate = () => {
//         let errors = {};
//         if (!email) errors.email = 'Email is required';
//         if (!password) errors.password = 'Password is required';
//         return errors;
//     };

//     // Rest of your component
// };

// export default LoginPage;




import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import APIService from '../BackendServices/APIService';

function SignUp() {
    const [signUpCreds, setSignUpCreds] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const firstName = signUpCreds.firstName;
    const lastName = signUpCreds.lastName;
    const email = signUpCreds.email;
    const password = signUpCreds.password;
    const confirmPassword = signUpCreds.confirmPassword;


    const handleChange = (field, value) => {
        setSignUpCreds((prevSignUpCreds) => ({...prevSignUpCreds, [field]: value}));
    }

// const toggleShowPassword = () => {
//   setShowPassword(!showPassword);
// };
  
    // const validateForm = () => {
    //   let formErrors = {};
    //   let formIsValid = true;
  
    //   if (!firstName) {
    //     formIsValid = false;
    //     formErrors['firstName'] = '*First name is required';
    //   }
  
    //   if (!lastName) {
    //     formIsValid = false;
    //     formErrors['lastName'] = '*Last name is required';
    //   }
  
    //   if (!email) {
    //     formIsValid = false;
    //     formErrors['email'] = '*Email is required';
    //   }
  
    //   if (!password) {
    //     formIsValid = false;
    //     formErrors['password'] = '*Password is required';
    //   }
  
    //   if (password !== confirmPassword) {
    //     formIsValid = false;
    //     formErrors['confirmPassword'] = '*Passwords do not match';
    //   }
  
    
    // }


    const validateFirstName = (firstName) => {
        const regex = /^[a-zA-Z]+$/;
        return regex.test(firstName);
      }
    
      const validateLastName = (lastName) => {
        const regex = /^[a-zA-Z]+$/;
        return regex.test(lastName);
      }
           
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }

    const validatePassword = (password) => {
        // Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regex.test(password);
      }
      
    const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        APIService.saveSignUpCreds(signUpCreds).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });


      }
    
  return (
   <div style={{
    position: 'relative', 
    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23000000\' fill-opacity=\'1\' d=\'M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
    backgroundSize: 'cover',
    animation: 'wave 3s ease infinite'}}>
    <MDBContainer fluid className=' d-flex align-items-center justify-content-center bg-image'>
      
      <MDBCard className='m-5' style={{}}>
        <MDBCardBody className='px-5' style={{width:'45rem'}}>
          <h2 className="text-uppercase text-center mb-5">Login Form</h2>

         

          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form3' type='email' value={email} 
          onChange={(e) => handleChange("email", e.target.value)} />
          {!validateEmail(email) && email && <p style={{color: 'red'}}>Please enter a valid email</p>}

          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4'  value={password} 
          onChange={(e) => handleChange("password", e.target.value)} />
          {!validatePassword(password) && password && <p style={{color: 'red'}}>Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number</p>}

          

         
          
          

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' disabled={!firstName || !lastName || !email || !password || !confirmPassword}
          onClick={handleSubmit}
          >Log In</MDBBtn>

          <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to = "/loginpage"><a href="#!" class="fw-bold text-body"><u>Login here</u></a></Link></p>
          </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  );
}

export default SignUp;