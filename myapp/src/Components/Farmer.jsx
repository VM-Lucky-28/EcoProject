// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FarmerService from "./FarmerService";
// import { Container,Row} from 'react-bootstrap';
// const Farmer = () => {
     
//     const[Farmer, setFarmer] = useState({
//         id :"",
//         FirstName :"",
//         LastName :"",
//         Email:"",
//         Cropquantity :"",
//         Croptype :"",
//         Price: "",
//     });
//   const navigate = useNavigate("/Farmer");
   
//   const handlechange = (e) => {
//      const value = e.target.value;
//      setFarmer({...Farmer,[e.target.name]: value});
//   };


//     const saveFarmer = (e) => {
//         e.preventDefault();
//         FarmerService.saveFarmer(Farmer).then((Response)=>{
//             console.log(Response);
//             // navigate("/FarmerList");
//         })
//         .catch((error)=>{
//             console.log(error);
//         });
//     };


//     const reset = (e) => {
//         e.preventDefault();
//         setFarmer({
//             id :"",
//             FirstName :"",
//             LastName :"",
//             Email:"",
//             Cropquantity :"",
//             Croptype :"",
//             Price: "",
//         });
//     };
//     return(
//         <Container className="login-container" style={{ height: '100vh', width:'100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <Row className="justify-content-md-center">
//         <div className="flex max-w-2xl mx-auto shadow border-b">
//             <div className="px-8 py-8">
//                 <div className="font-thin text-2xl tracking-wider mx">
//                     <h1 Link to="/farmer" className="pt-3">Farmer Register</h1>
//                 </div>
//                 <div className="items-center justify-center h-14 w-full my-4">
//                     <label className="block text-gray-600 text-sm font-normal">
//                         FirstName
//                     </label>
//                     <input type="text" 
//                     name="firstName"
//                     value={Farmer.FirstName}
//                     onChange={(e)=>handlechange(e)} 
//                     className="h-10 w-96 border mt-2 px-2 py-2"
//                     ></input>
//                 </div>

//                 <div className="items-center justify-center h-14 w-full my-4">
//                     <label className="block text-gray-600 text-sm font-normal">
//                         LastName
//                     </label>
//                     <input type="text" 
//                     name="lastName"
//                     value={Farmer.LastName}
//                     onChange={(e)=>handlechange(e)} 
//                     className="h-10 w-96 border mt-2 px-2 py-2"
//                     ></input>
//                 </div>

//                 <div className="items-center justify-center h-14 w-full my-4">
//                     <label className="block text-gray-600 text-sm font-normal">
//                         Email
//                     </label>
//                     <input type="email" 
//                     name="email"
//                     value={Farmer.Email}
//                     onChange={(e)=>handlechange(e)} 
//                     className="h-10 w-96 border mt-2 px-2 py-2"
//                     ></input>
//                 </div>
//                 <div className="items-center justify-center h-14 w-full my-4">
//                     <label className="block text-gray-600 text-sm font-normal">
//                         Crop quantity
//                     </label>
//                     <input type="text" 
//                     name="cropquantity"
//                     value={Farmer.Cropquantity}
//                     onChange={(e)=>handlechange(e)} 
//                     className="h-10 w-96 border mt-2 px-2 py-2"
//                     ></input>
//                 </div>

//                 <div className="items-center justify-center h-14 w-full my-4">
//                     <label className="block text-gray-600 text-sm font-normal">
//                         Crop type
//                     </label>
//                     <input type="text" 
//                     name="croptype"
//                     value={Farmer.Croptype}
//                     onChange={(e)=>handlechange(e)} 
//                     className="h-10 w-96 border mt-2 px-2 py-2"
//                     ></input>
//                 </div>
 
//                 <div className="items-center justify-center h-14 w-full my-4">
//                     <label className="block text-gray-600 text-sm font-normal">
//                         Price
//                     </label>
//                     <input type="text" 
//                     name="price"
//                     value={Farmer.Price}
//                     onChange={(e)=>handlechange(e)} 
//                     className="h-10 w-96 border mt-2 px-2 py-2"
//                     ></input>
//                 </div>


//                  <div className="items-center btn btn-primary text-white justify-center h-14 w-full my-4  px-4">
//                   <button className=" text-white  hover: bg-green-700" 
//                       onClick={saveFarmer}>  Save  </button>
//                  </div>


//                  <div className="items-center btn btn-primary text-white justify-center h-14 w-full  space-x-4 px-4">
//                   <button className="rounded text-white  hover: bg-green-700" 
//                       onClick={reset}>  Clear </button>
//                  </div>
               
//             </div>
//         </div>
//         </Row>
//         </Container>
//     );
// }

// export default Farmer;




import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

function Farmer({ onMount }) {
    const [FirstName, setFirstName] = useState('');
    const [Location, setLocation] = useState('');
    const [Mobilenumber, setMobilenumber] = useState('');
    const [FirstNameError, setFirstNameError] = useState('');
    const [LocationError, setLocationError] = useState('');
    const [LastName, setLastName] = useState('');
    const [Cropquantity, setCropquantity] = useState('');
    const [Croptype, setCroptype] = useState('');
    const [Price, setPrice] = useState('');
    const [LastNameError, setLastNameError] = useState('');
    const [CropquantityError, setCropquantityError] = useState('');
    const [CroptypeError, setCroptypeError] = useState('');
    const [PriceError, setPriceError] = useState('');
    const [MobilenumberError, setMobilenumberError] = useState('');

    useEffect(() => {
        if (onMount) {
          onMount();
        }
      }, [onMount]);

    const handleSubmit = (event) => {
        event.preventDefault();

        
        
        let isValid = true;

        if (!FirstName) {
            setFirstNameError('FirstName is required');
            isValid = false;
        } else {
            setFirstNameError('');
        }


        if (!LastName) {
            setLastNameError('LastName is required');
            isValid = false;
        } else {
            setLastNameError('');
        }
  
        if (!Mobilenumber) {
            setMobilenumberError('Mobilenumber is required');
            isValid = false;
        } else {
            setMobilenumberError('');
        }


        if (!Cropquantity) {
            setCropquantityError('Cropquantity is required');
            isValid = false;
        } else {
            setCropquantityError('');
        }

        if (!Croptype) {
            setCroptypeError('Croptype is required');
            isValid = false;
        } else {
            setCroptypeError('');
        }

        if (!Price) {
            setPriceError('Price is required');
            isValid = false;
        } else {
            setPriceError('');
        }

        if (!Location) {
            setLocationError('Location is required');
            isValid = false;
        } else {
            setLocationError('');
        }

    




        // if (!password) {
        //     setPasswordError('Password is required');
        //     isValid = false;
        // } else {
        //     setPasswordError('');
        // }

        // if (isValid) {
        //     // Handle form submission here
        // }
        
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
                                <h2 className="text-center">Farmer Register</h2>
                                <Form.Group controlId="formBasicFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter firstname" value={FirstName} onChange={(e) => setFirstName(e.target.value)} isInvalid={!!FirstNameError} />
            <Form.Control.Feedback type='invalid'>{FirstNameError}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicLasTName">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter lastname" value={LastName} onChange={(e) => setLastName(e.target.value)} isInvalid={!!LastNameError} />
            <Form.Control.Feedback type='invalid'>{LastNameError}</Form.Control.Feedback>
        </Form.Group>
 
        <Form.Group controlId="formBasicPrice">
            <Form.Label>Mobilenumber</Form.Label>
            <Form.Control type="text" placeholder="Enter mobilenumber" value={Mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} isInvalid={!!MobilenumberError} />
            <Form.Control.Feedback type='invalid'>{MobilenumberError}</Form.Control.Feedback>
        </Form.Group>
   
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Cropquantity</Form.Label>
            <Form.Control type="text" placeholder="Enter cropquantity" value={Cropquantity} onChange={(e) => setCropquantity(e.target.value)} isInvalid={!!CropquantityError} />
            <Form.Control.Feedback type='invalid'>{CropquantityError}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicCroptype">
            <Form.Label>Croptype</Form.Label>
            <Form.Control type="text" placeholder="Enter croptype" value={Croptype} onChange={(e) => setCroptype(e.target.value)} isInvalid={!!CroptypeError} />
            <Form.Control.Feedback type='invalid'>{CroptypeError}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter price" value={Price} onChange={(e) => setPrice(e.target.value)} isInvalid={!!PriceError} />
            <Form.Control.Feedback type='invalid'>{PriceError}</Form.Control.Feedback>
        </Form.Group>


        <Form.Group controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" value={Location} onChange={(e) => setLocation(e.target.value)} isInvalid={!!LocationError} />
            <Form.Control.Feedback type='invalid'>{LocationError}</Form.Control.Feedback>
        </Form.Group>
                                <hr />
                                <Link to="/button">
                                    <Button variant="primary" type="submit" className="w-100  height: '100vh'">Register</Button>
                                </Link>
                                {/* <br />
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
    </Button> */}
{/* </div>
</div> */}
<hr />
                                {/* <Row className="justify-content-md-center">
                                    <p style={{textAlign:'center'}}>Dont Have Account</p>
                                    <div> */}
                {/* ... */}
                {/* <button variant="primary" type="submit" className="w-100">
                <Link to="/Signup" className="btn btn-link" style={{textDecoration:'none',}}>Signup</Link> </button> */}
                {/* ... */}
            {/* </div> */}
                                {/* </Row> */}
                            </Form>
                        </Card.Body>
                    </Card>
            </Row>
        </Container>
    </div>
        
    );
}

export default Farmer



