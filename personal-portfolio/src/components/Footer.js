import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            Jake Brown
          </Col>
          <Col size={12} sm={6} className="text-sm-end">
            <p>Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
