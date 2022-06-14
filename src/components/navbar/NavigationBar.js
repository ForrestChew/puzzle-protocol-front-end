import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CryptoLogin from '../crypto-login/CryptoLogin';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Puzzle Protocol</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Challenges" id="basic-nav-dropdown">
                <LinkContainer to="/challenges/stagnant-challenges">
                  <NavDropdown.Item>Stagnant Challenges</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/challenges/propose-challenges">
                  <NavDropdown.Item>Propose Challenge</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/challenges/create-challenges">
                  <NavDropdown.Item>Create Challenge</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/active-challenges">
                <Nav.Link>Active Challenges</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <CryptoLogin />
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
