import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import logo from '../../../images/logo.svg';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useAuth();
    console.log(user.displayName);
    return (
        <div>
            <div className="logo-container my-2">
                <img src={logo} alt="" />
            </div>
            <Navbar bg="light" variant="light" sticky="top" className="shadow-sm">
                <Container>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#donation">Donation</Nav.Link>
                        <Nav.Link as={Link} to="/home#events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/home#blogs">Blogs</Nav.Link>
                        {user?.email && <Nav.Link as={Link} to="/"><h5>{user?.displayName}</h5></Nav.Link>}
                        {
                            !user?.email ? <Nav.Link as={Link} to="/login"><button className="btn btn-primary rounded-pill">Log in</button></Nav.Link> :
                                <button onClick={handleSignOut} className="btn btn-secondary rounded-pill">Logout</button>
                        }
                        {!user?.email && <Nav.Link as={Link} to="/register"><button className="btn btn-secondary rounded-pill">Register</button></Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;