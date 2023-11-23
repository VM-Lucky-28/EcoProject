import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import image from'./dose-juice-sTPy-oeA3h0-unsplash.jpg';
import image2 from './brooke-lark-08bOYnH_r_E-unsplash.jpg'
import image3 from './karl-magnuson-LaHgrqo1ZRk-unsplash.jpg'
import image4 from './tamanna-rumee-7OCUyev2M9E-unsplash.jpg'
import image5 from './pawel-czerwinski-3k9PGKWt7ik-unsplash.jpg'
import image6 from './milad-fakurian-nY14Fs8pxT8-unsplash.jpg'

import image7 from './img/courtney-smith-ssF9lLDWB7c-unsplash.jpg';
import image8 from './img/sydney-davidson-f6WXsaXVZv0-unsplash.jpg';
import image9 from './img/daiga-ellaby-iDnK6ynAcIQ-unsplash.jpg';
import image10 from './img/markus-spiske-1UTexFK5FTE-unsplash.jpg';
import image11 from './img/markus-spiske-9cHVqn9bBpQ-unsplash.jpg';
import image12 from './img/mor-shani-yk5f1zvD2qU-unsplash.jpg';
import image13 from './img/sandra-martins-Sl2ObmANob4-unsplash.jpg';
import image14 from './img/timothy-l-brock-WJ5mej6mWi4-unsplash.jpg';
// import FarmerFarmingWaveBG from './FarmerFarmingWaveBG';



function Home() {
    return (
        // <div style={{position: 'relative', backgroundColor:'black'}}>
        // <div style={{
        //     position: 'relative', 
        //     background: 'linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)', 
        //     backgroundSize: '400% 400%',
        //     animation: 'gradient 15s ease infinite'
        // }}>
        <div style={{
            position: 'relative', 
            background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ee7752\' fill-opacity=\'1\' d=\'M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundSize: 'cover',
            animation: 'wave 3s ease infinite',
            backgroundColor:'black'
        }}>
        
            {/* <FarmerFarmingWaveBG /> */}
            {/* <img src={image6} alt="" style={{height:'100vh', width:'100%', position: 'absolute', zIndex: 1}}/> */}
            <Carousel fade interval={3000}  style={{ zIndex: 2}}>
                <Carousel.Item>
                <Card className="info-card" style={{height:'40rem', width:'90rem', margin:'8rem 2rem 2rem 20rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
                        <Card.Img variant="top" src={image} alt="First slide" style={{height:'100%', width:'100%', objectFit:'cover'}}/>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="info-card" style={{height:'40rem', width:'90rem', margin:'8rem 2rem 2rem 20rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
                        <Card.Img variant="top" src={image7} alt="Second slide" style={{height:'100%', width:'100%', objectFit: 'cover'}}/>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="info-card" style={{height:'40rem', width:'90rem', margin:'8rem 2rem 2rem 20rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
                        <Card.Img variant="top" src={image2} alt="Third slide" style={{height:'100%', width:'100%', objectFit:'cover'}}/>
                    </Card>
                </Carousel.Item>
            </Carousel>

            <hr />
            <h2 className='about'>Explore Here</h2>
            <hr />
            <hr />
            <div className="card-container">



           <Card className="info-card" style={{ transition: '0.3s' }}>
    <Card.Img variant="top" src={image9} alt="Card image" />
    <Card.Body className="info-card-body">
        <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
    </Card.Body>
</Card>


            <Card className="info-card">
                <Card.Img variant="top" src={image8} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>

            <Card className="info-card">
                <Card.Img variant="top" src={image9} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>

            <Card className="info-card">
                <Card.Img variant="top" src={image10} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>


            <Card className="info-card">
                <Card.Img variant="top" src={image11} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>


            <Card className="info-card">
                <Card.Img variant="top" src={image12} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>


            <Card className="info-card">
                <Card.Img variant="top" src={image13} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>


            <Card className="info-card">
                <Card.Img variant="top" src={image14} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>

            <Card className="info-card">
                <Card.Img variant="top" src={image7} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>


            <Card className="info-card">
                <Card.Img variant="top" src={image8} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>


            <Card className="info-card">
                <Card.Img variant="top" src={image9} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>


            <Card className="info-card">
                <Card.Img variant="top" src={image10} alt="Card image" />
                <Card.Body className="info-card-body">
                    <Card.Text>Farmer Name :xxxxxxxx <br /> From: xxxxxx <br /> Crop:xxxxxxx</Card.Text>
                </Card.Body>
            </Card>
            {/* Repeat the Card component for as many cards as you need */}
            <hr />
            <hr />
        </div>
            
        </div>
    );
}

export default Home;

