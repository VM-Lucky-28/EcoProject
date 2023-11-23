// import React, { useState } from 'react';
// import { Button, Card, Container, Form, Row } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { ReactComponent as FacebookLogo } from './facebook.svg';
// import { ReactComponent as GoogleLogo } from './google-plus.svg';
// import {ReactComponent as PinterestLogo} from './pinterest.svg';
// import MainService from '../BackendServices/MainService';

// const SignupPage = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         id:"",
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });


//     const handleChange = (field, value) => {
//         setFormData((prevFormData) => ({...prevFormData, [field]:value}))
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         MainService.saveSignupCreds(formData)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//         navigate('/form');
//         console.log(formData.email, formData.password, formData.confirmPassword);
//     };

//     console.log(formData);


//     return (
//                 <div style={{
//             position: 'relative', 
//             background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23000000\' fill-opacity=\'1\' d=\'M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',            
//             backgroundSize: 'cover',
//             animation: 'wave 6s ease infinite'
//         }}>
//         <Container className="login-container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
//             <Card className="info-card" style={{ transition: '0.3s' , height:'37rem', width:'37rem'}} >
//                         <Card.Body>
//             <form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleChange('email', e.target.value)} value={formData.email}/>
//                     {/* {errors.email && <p className="error">{errors.email}</p>} */}
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" onChange={(e) => handleChange('password', e.target.value)} value={formData.password}/>
//                     {/* {errors.password && <p className="error">{errors.password}</p>} */}
//                 </Form.Group>

//                 <Form.Group controlId="formBasicConfirmPassword">
//                     <Form.Label>Confirm Password</Form.Label>
//                     <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => handleChange('confirmPassword', e.target.value)} value={formData.confirmPassword}/>
//                     {/* {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>} */}
//                 </Form.Group>
//                 <hr />
//                 <Link to="/loginpage">
//                 <Button variant="primary" type="submit" className="w-100" >Sign Up</Button>
//                 </Link>
//                 <hr />
                
//                 <h5 style={{textAlign:'center'}}>Signup With</h5>
        
//                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>              
//                      <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://www.facebook.com'}>
//        <FacebookLogo style={{ width: '100%', height: '100%' }} />
//    </Button>
//     <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://accounts.google.com/Login'}>
//         <GoogleLogo style={{ width: '100%', height: '100%' }} />
//     </Button>
//      <Button variant="link" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }} onClick={() => window.location.href = 'https://www.pinterest.com/login/'}>
//          <PinterestLogo style={{ width: '100%', height: '100%' }} />
//      </Button>
//      </div>
                


                
//             </form>
//             </Card.Body>
//             </Card>
//             <hr />
                               
//         </Container>
//         </div>
//     );
// };

// export default SignupPage;

// import React from 'react'
// import { useRef, useState, useEffect } from 'react'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faCheck, faTimes, faInfoCircle, faUser, faEnvelope, faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons"
// import "./Signup.css";
// import {motion} from "framer-motion"
// import { Link } from 'react-router-dom';
// import MainService from '../BackendServices/MainService';

// const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const USER_REGEX = /^[A-z][A-z0-9-_]{5,24}$/;
// const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// const SignUp = () => {
// 	const emailRef = useRef();
// 	const errRef = useRef();


// 	const [loginCreds, setLoginCreds] = useState({
// 		id:"",
// 		email:"",
// 		username: "",
// 		password:"",
// 	});


// 	const handleChange = (field, value) => {
// 		setLoginCreds((prevLoginCreds) => ({...prevLoginCreds, [field] : value}))
// 	}

// const [email, setEmail] = useState("");
// const [validEmail, setValidEmail] = useState(false);
// const [emailFocus, setEmailFocus] = useState(false);

// const [user, setUser] = useState("")
// const [validUser, setValidUser] = useState(false)
// const [userFocus, setUserFocus] = useState(false)

// const [password, setPassword] = useState("")
// const [validPassword, setValidPassword] = useState(false)
// const [passwordFocus, setPasswordFocus] = useState(false)

// const [matchPassword, setMatchPassword] = useState("")
// const [validMatch, setValidMatch] = useState(false)
// const [matchFocus, setMatchFocus] = useState(false)

// const [errMsg, setErrMsg] = useState("")
// const [success, setSuccess] = useState(false)

// useEffect(() => {
// 	emailRef.current.focus()
// }, [])

// useEffect(() => {
// 	setValidEmail(EMAIL_REGEX.test(loginCreds.email))
// }, [loginCreds.email])

// useEffect(() => {
// 	setValidUser(USER_REGEX.test(loginCreds.username))
	
// }, [loginCreds.username])

// useEffect(() => {
// 	setValidPassword(PASSWORD_REGEX.test(loginCreds.password))
// 	setValidMatch(loginCreds.password === matchPassword)
// }, [loginCreds.password, matchPassword])

// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	// To avoid javascript hack
// 	const v1 = EMAIL_REGEX.test(loginCreds.email)
// 	const  v2 = USER_REGEX.test(loginCreds.username)
// 	const v3 = PASSWORD_REGEX.test(loginCreds.password)

// 	if (!v1 || !v2 || !v3) {
// 		setErrMsg("Invalid Entry")
// 		return;
// 	}

// 	MainService.saveLoginCreds(loginCreds)
// 	.then((response) => {
// 		console.log(response);
// 	}) 
// 	.catch((error) => {
// 		console.log(error);
// 	})
// 	console.log(loginCreds.email, loginCreds.username, loginCreds.password);
// 	setSuccess(true);
	
// }

// 	return (
// 		<div 
// 		className="login-container"
// 		initial={{opacity:0}}
// 		animate={{opacity:1}}
// 		transition={{delay:1, ease:"easeInOut"}}>
// 		{success ?(
// 			<section>
// 				<h1>Success !!!</h1>
// 				<p>
// 					<Link href="#">Sign In</Link>
// 				</p>
// 			</section>
// 			) : (
// 			<section 
// 			className="form-section"
// 			initial={{y:"-100%"}}
// 			animate={{y:0}}
// 			transition={{delay:1.5, type:"spring", stiffness:20}}
// 			>
// 				<h1 style={{textAlign:'center'}} className="auth">Create an Account</h1>
// 				<form onSubmit={handleSubmit}>


// 					<label htmlFor="email">Email:
// 						<FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"}/>
// 						<FontAwesomeIcon icon={faTimes} className={validEmail || !loginCreds.email? "hide" : "invalid"}/>
// 					</label>
// 					<div className="input-wrapper">
// 						<input 
// 							id="email"
// 							type="text" 
// 							placeholder="test@gmail.com"
// 							ref={emailRef}
// 							onChange={(e) => handleChange('email', e.target.value)}
// 							value={loginCreds.email}
// 							onFocus={() => setEmailFocus(true)}
// 							onBlur={() => setEmailFocus(false)}
// 							aria-invalid={"false"}
// 							aria-describedby='emailnote'
// 							autoComplete='off'
// 							required
// 						/>
// 						<FontAwesomeIcon icon={faEnvelope} className="envelope"/>
// 					</div>

// 					<p id="emailnote" className={emailFocus && loginCreds.email && !validEmail?  "suggestion" : "offscreen"}>
// 						<FontAwesomeIcon icon={faInfoCircle}/>
// 						Must Include @character <br/>
// 						Special characters like <br/> ! # $ % & ' - / = ? ^ _ `| ~ are allowed <br/>
// 						Letters, numbers allowed.
// 					</p>



// 					<label htmlFor="username">Username:
// 					<FontAwesomeIcon icon={faCheck} className={validUser ? "valid" : "hide"}/>
// 					<FontAwesomeIcon icon={faTimes} className={validUser || !loginCreds.username? "hide" : "invalid"}/>
// 					</label>
// 					<div className="input-wrapper">
// 						<input 
// 							id="username"
// 							type="text" 
// 							onChange={(e) => handleChange('username', e.target.value)}
// 							value={loginCreds.username}
// 							required
// 							autoComplete='off'
// 							onFocus={() => setUserFocus(true)}
// 							onBlur={() => setUserFocus(false)}
// 							aria-invalid={"false"}
// 							aria-describedby='usernote'
// 						/>
// 						<FontAwesomeIcon icon={faUser}/>
// 					</div>

// 					<p id="usernote" className={userFocus && loginCreds.username && !validUser ? "suggestion" : "offscreen"}>
// 						<FontAwesomeIcon icon={faInfoCircle}/>
// 						Must have 6 to 24 characters <br/>
// 						Must begin with a letter.<br />
// 						Letters, numbers, underscores, hyphens allowed.
// 					</p>
					
					

// 					<label htmlFor="password">Password:
// 					<FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"}/>
// 					<FontAwesomeIcon icon={faTimes} className={validPassword || !loginCreds.password ? "hide" : "invalid"}/>
// 					</label>
// 					<div className="input-wrapper">
// 						<input 
// 						id="password"
// 						type="password"
// 						onChange={(e) => handleChange('password', e.target.value)}
// 						value={loginCreds.password}
// 						required
// 						onFocus={() => setPasswordFocus(true)}
// 						onBlur={() => setPasswordFocus(false)}
// 						aria-invalid={"false"}
// 						aria-describedby='passwordnote'
// 						/>
// 						{validPassword  ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen}/>}
// 					</div>

// 					<p id="passwordnote" className={passwordFocus && loginCreds.password && !validPassword? "suggestion" : "offscreen"}>
// 						<FontAwesomeIcon icon={faInfoCircle}/>
// 						8 to 24 characters.<br />
// 						Must include uppercase and lowercase letters <br/>, a number and a special character.<br />
// 						Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
// 					</p>


					
// 					<label htmlFor="matchPassword">Repeat Password:
// 					<FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"}/>
// 					<FontAwesomeIcon icon={faTimes} className={validMatch ? "hide" : "invalid"}/>
// 					</label>
// 					<div className="input-wrapper">
// 						<input
// 							id="matchPassword"
// 							type="password"
// 							onChange={(e) => setMatchPassword(e.target.value)}
// 							value={matchPassword}
// 							required
// 							onFocus={() => setMatchFocus(true)}
// 							onBlur={() => setMatchFocus(false)}
// 							aria-invalid={"false"}
// 							aria-describedby='matchpasswordnote'
// 						/>
// 						{ matchPassword && validMatch ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen}/>}
						
// 					</div>

// 					<p id="matchpasswordnote" className={matchFocus && matchPassword && !validMatch? "suggestion" : "offscreen"}>
// 						<FontAwesomeIcon icon={faInfoCircle}/>
// 						Must match the above password input field.
// 					</p>

// 					<Link to="/loginpage">
                
// 					<button 
// 					disabled={!validEmail || !validUser || !validPassword || !validMatch ? true : false} 
// 					onClick={handleSubmit}>
// 						Sign Up
// 					</button>
//                     </Link>
// 				</form>
// 		</section>)}

// 		</div>
// 	)
// }


// export default SignUp;


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
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '700px'}}>
        <MDBCardBody className='px-5' style={{width:'45rem'}}>
          <h2 className="text-uppercase text-center mb-5">Signup Form</h2>

          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' value={firstName} 
          onChange={(e) => handleChange("firstName", e.target.value)} />
          {!validateFirstName(firstName) && firstName && <p style={{color: 'red'}}>First name must only contain letters</p>}

          <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' value={lastName} 
          onChange={(e) => handleChange("lastName", e.target.value)}  />
          {!validateLastName(lastName) && lastName && <p style={{color: 'red'}}>Last name must only contain letters</p>}

          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form3' type='email' value={email} 
          onChange={(e) => handleChange("email", e.target.value)} />
          {!validateEmail(email) && email && <p style={{color: 'red'}}>Please enter a valid email</p>}

          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4'  value={password} 
          onChange={(e) => handleChange("password", e.target.value)} />
          {!validatePassword(password) && password && <p style={{color: 'red'}}>Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number</p>}

          <MDBInput wrapperClass='mb-4' label='Confirm password' size='lg' id='form5' type='password' value={confirmPassword} 
          onChange={(e) => handleChange("confirmPassword", e.target.value)}  />
          {!validateConfirmPassword(password, confirmPassword) && confirmPassword && <p style={{color: 'red'}}>Passwords do not match</p>}

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          
          

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' disabled={!firstName || !lastName || !email || !password || !confirmPassword}
          onClick={handleSubmit}
          >Register</MDBBtn>

          <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to = "/loginpage"><a href="#!" class="fw-bold text-body"><u>Login here</u></a></Link></p>
          </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  );
}

export default SignUp;





