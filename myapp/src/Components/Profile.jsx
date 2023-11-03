import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Profile({ card }) {
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    <Image src={card.image} roundedCircle fluid />
                </Col>
                <Col xs={12} md={6}>
                    <h2>{card.name}</h2>
                    <p>Email: {card.email}</p>
                    <p>Phone: {card.phone}</p>
                    <p>Address: {card.address}</p>
                    {/* Add more personal details as needed */}
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;