import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'
import image from './dose-juice-sTPy-oeA3h0-unsplash.jpg'

function About(){
    return(
        <div style={{
            position: 'relative', 
            background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%230000FF\' fill-opacity=\'1\' d=\'M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundSize: 'cover',
            animation: 'wave 3s ease infinite'
        }}>
            <h1 style={{textAlign:'center', fontFamily:'Times New Roman', fontWeight:'bolder'}}> About Us</h1>
            <br />
            <br />
            <Container>
      <Row>
        <Col sm={8}>
          <h1>Mr. Sandadi Bharath</h1>
          <p>Sandadi Bharath is the CEO of 'Eco Grow'</p>
        </Col>
        <Col sm={4}>
          <img src={image} alt="description" className="rounded-circle" style={{height:'25rem'}} />
        </Col>
      </Row>
<hr />

      <Row>

      <Col sm={8}>
          <img src={image} alt="description" className="rounded-circle" style={{height:'25rem'}} />
        </Col>
        <Col sm={4}>
          <h1>Ms. Sowjanya Devi</h1>
          <p>Sowjanya Devi is the Manager of 'Eco Groww'</p>
        </Col>
        
      </Row>

<hr />
      <Row>
        <Col sm={8}>
          <h1>Mr. Gokul Ravi</h1>
          <p>Gokul Ravi is the Director of 'Eco Groww'</p>
        </Col>
        <Col sm={4}>
          <img src={image} alt="description" className="rounded-circle" style={{height:'25rem'}} />
        </Col>
      </Row>
<hr />

      <Row>

      <Col sm={8}>
          <img src={image} alt="description" className="rounded-circle" style={{height:'25rem'}} />
        </Col>
        <Col sm={4}>
          <h1>Mr. Manikanta</h1>
          <p>Manikanta is the Director of 'Eco Groww'</p>
        </Col>
        
      </Row>


    </Container>
            


    
<br />
<br />
<br />

            </div>
    )
}

export default About;