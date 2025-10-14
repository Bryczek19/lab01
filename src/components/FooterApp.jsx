import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterApp() {
  return (
    <footer className="bg-light border-top py-3 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col xs="12" md="6">
            <strong>WSEI</strong>
          </Col>
          <Col xs="12" md="6" className="text-md-end">
            <span>Autor: konrad.bryk@wsei.edu.pl</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterApp;


