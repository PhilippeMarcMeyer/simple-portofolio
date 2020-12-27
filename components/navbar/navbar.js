import React, { Fragment } from "react";
import Link from "next/link";
import { Container,Navbar,Nav } from "react-bootstrap";

export default function NavbarMenu () {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand>
                        <div className="navtext">
                            <Link href="/">
                                <Nav.Link as="home" href="/">
                                    RKereh.
                                </Nav.Link>
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto font-weight-bold">
                            <Link href="/">
                                <Nav.Link as="home" href="/">
                                    Home
                                </Nav.Link>
                            </Link>
                            <Link href="/about">
                                <Nav.Link as="about" href="/about">
                                    About
                                </Nav.Link>
                            </Link>
                            <Link href="/projects">
                                <Nav.Link as="projects" href="/projects">
                                    My Projects
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <style jsx>{`
                * {
                    font-family: 'Roboto', sans-serif;
                }
                .navtext {
                    color: #0991e6;
                    font-weight: bold;
                    font-size: 25px;
                }
            `}</style>

        </Fragment>
    );
}
