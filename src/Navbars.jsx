import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegHeart } from "react-icons/fa";
import './index.css';
import { Outlet } from 'react-router-dom';
import { Link} from 'react-router-dom'

function Navbars() {
  return (
    <>
      <Navbar bg='blue' data-bs-theme="white" className='ul mt-3'>
        <Container className='li fw-bold '>
          <Navbar.Brand Link as={Link} to="/recipe">RECIPE</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/allitems">ALL ITEMS</Nav.Link>
            <Nav.Link href="#pricing">FAVORITE
            <FaRegHeart className='logo ms-2 mx-auto '/></Nav.Link>
            <Nav.Link as={Link} to="/country">COUNTRY</Nav.Link>
            <Link to="/allitems" className="search btn btn-success rounded-pill justify-content-center">BOOK NOW</Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default Navbars;