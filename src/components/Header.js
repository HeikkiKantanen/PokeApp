import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


const Header = () => {
    return (
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">PokeApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="PokeList">
                                <Nav.Link href="PokeList">Pokelist</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )};

    export default Header;