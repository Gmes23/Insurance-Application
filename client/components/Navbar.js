import Link from 'next/link';
import { Form, FormControl } from 'react-bootstrap';
import { Row, Col, Grid } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const NavBar = () => (
    <div>    
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/"> Commercial Auto Insurance </Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dashboard">dashboard</Nav.Link>
        </Nav>
        </Navbar>
    </div>
);

export default NavBar;