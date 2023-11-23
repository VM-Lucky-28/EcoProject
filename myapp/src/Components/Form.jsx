// // import React from 'react';
// // import { Button, Card, Container, Row } from 'react-bootstrap';
// // // import './Form.css';

// // function Form() {
// //     return (
// //         <div>
// //             <Container className="login-container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
// //             <Card className="info-card" style={{ transition: '0.3s' , height:'37rem', width:'37rem'}} >
// //         <form>
// //             <section>
// //                 <h2>Farmer Registration</h2>
// //                 <input type="text" placeholder="Full Name" required />
// //                 <input type="tel" placeholder="Mobile" required />
// //                 <input type="text" placeholder="Location" required />
// //                 <input type="text" placeholder="Crop Type" required />
// //                 <input type="number" placeholder="Quantity" required />
// //                 <input type="file" required />
// //                 <input type="submit" value="Register" />
// //             </section>

// //             <section>
// //                 <h2>Buyer Registration</h2>
// //                 <input type="text" placeholder="Full Name" required />
// //                 <input type="tel" placeholder="Mobile" required />
// //                 <input type="text" placeholder="Location" required />
// //                 <input type="number" placeholder="Households" required />
// //                 <input type="submit" value="Register" />
// //             </section>
// //         </form>
// //         </Card>
// //         </Container>
// //         </div>
// //     );
// // };

// // export default Form;

// import React from 'react';
// import { Tab, Tabs, Card, Container } from 'react-bootstrap';

// const Form = () => {
//     return (
//         <div>
//             <Container>
//                 <Card>
//                     <Tabs defaultActiveKey="farmer" id="uncontrolled-tab-example">
//                         <Tab eventKey="farmer" title="Farmer Registration">
//                             <form>
//                                 <input type="text" placeholder="Full Name" required />
//                                 <input type="tel" placeholder="Mobile" required />
//                                 <input type="text" placeholder="Location" required />
//                                 <input type="number" placeholder="Land Area" required />
//                                 <input type="file" required />
//                                 <input type="submit" value="Register" />
//                             </form>
//                         </Tab>
//                         <Tab eventKey="buyer" title="Buyer Registration">
//                             <form>
//                                 <input type="text" placeholder="Full Name" required />
//                                 <input type="tel" placeholder="Mobile" required />
//                                 <input type="text" placeholder="Location" required />
//                                 <input type="number" placeholder="Households" required />
//                                 <input type="submit" value="Register" />
//                             </form>
//                         </Tab>
//                     </Tabs>
//                 </Card>
//             </Container>
//         </div>
//     );
// };

// export default Form;




import React from 'react';
import { Tab, Tabs, Card, Container, Form, Button } from 'react-bootstrap';

const FormPage = () => {
    return (
        <Container>
            <Card>
                <Tabs defaultActiveKey="farmer" id="uncontrolled-tab-example">
                    <Tab eventKey="farmer" title="Farmer Registration">
                        <Form>
                            <Form.Group controlId="farmerName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter full name" required />
                            </Form.Group>

                            <Form.Group controlId="farmerMobile">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="tel" placeholder="Enter mobile number" required />
                            </Form.Group>

                            <Form.Group controlId="farmerLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter location" required />
                            </Form.Group>

                            <Form.Group controlId="farmerLandArea">
                                <Form.Label>Land Area</Form.Label>
                                <Form.Control type="number" placeholder="Enter land area" required />
                            </Form.Group>

                            <Form.Group>
                                <Form.File id="farmerFile" label="Upload file" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">Register</Button>
                        </Form>
                    </Tab>

                    <Tab eventKey="buyer" title="Buyer Registration">
                        <Form>
                            <Form.Group controlId="buyerName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter full name" required />
                            </Form.Group>

                            <Form.Group controlId="buyerMobile">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="tel" placeholder="Enter mobile number" required />
                            </Form.Group>

                            <Form.Group controlId="buyerLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter location" required />
                            </Form.Group>

                            <Form.Group controlId="buyerHouseholds">
                                <Form.Label>Households</Form.Label>
                                <Form.Control type="number" placeholder="Enter number of households" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">Register</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </Card>
        </Container>
    );
};

export default FormPage;