import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5 className="text-white">About Us</h5>
                        <p className="text-white">
        Eco Groww is a company dedicated to promoting environmental sustainability
        and fostering a greener future. Since our establishment in [year], we have
        been committed to [brief description of mission].
      </p>

      <p className="text-white text-font-bold text-style-New times Roman">
        At Eco Groww, we believe in [key value or principle], and our team works
        tirelessly to [specific actions or initiatives]. Our goal is to make a positive
        impact on the planet by [company's main objectives].
      </p>
                        <ul className="list-unstyled text-small">
                            {/* <li><a className="text-muted" href="#">Link 1</a></li>
                            <li><a className="text-muted" href="#">Link 2</a></li> */}
                            {/* Add more links as needed */}
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="text-white">Contact Us</h5>
                        <p className="text-white text-font-bold text-style-New times Roman">Email:-ecogroww.du.in.com</p>
                        <p className="text-white text-font-bold text-style-New times Roman">Mobilenumber:-7845632953</p>

                        <ul className="list-unstyled text-small">
                            {/* <li><a className="text-muted" href="#">Link 1</a></li>
                            <li><a className="text-muted" href="#">Link 2</a></li> */}
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