import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
const NavbarComponent = () => {
    const cartProducts = useSelector(state=>state.cart);
    //console.log(cartProducts);
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand to="/" as={Link}>My Shopping Site</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link to="/" as={Link}>Home</Nav.Link>
            </Nav>
            <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent