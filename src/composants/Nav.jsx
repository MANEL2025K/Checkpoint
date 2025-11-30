import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import '../css/Nav.css';


const Nav = () => { 
    return (
<Navbar className="Nav" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_1280.jpg"
              width="80"
              height="80"
              className="d-inline-block align-top"
              style={{ borderRadius: "50%" }}
              
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    )}
export default Nav;




























