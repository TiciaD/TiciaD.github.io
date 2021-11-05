import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './Navbar.css';

export default function MyNavbar() {
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="title-name fs-2">Ticia Dunn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" exact={true} className="nav-link" activeClassName="active">HOME</NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="active">ABOUT</NavLink>
                        <NavLink to="/portfolio" className="nav-link" activeClassName="active">PORTFOLIO</NavLink>
                        <NavLink to="/blog" className="nav-link" activeClassName="active">BLOG</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
