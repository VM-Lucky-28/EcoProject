import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5 className="text-white">About Us</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Link 1</a></li>
                            <li><a className="text-muted" href="#">Link 2</a></li>
                            {/* Add more links as needed */}
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="text-white">Contact Us</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Link 1</a></li>
                            <li><a className="text-muted" href="#">Link 2</a></li>
                            {/* Add more links as needed */}
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="text-white">Careers</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Link 1</a></li>
                            <li><a className="text-muted" href="#">Link 2</a></li>
                            {/* Add more links as needed */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;