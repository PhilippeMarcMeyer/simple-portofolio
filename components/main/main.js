import React, { Fragment } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import Profile from "../../assets/img/profile.png";
import Link from "next/link";

export default function Main () {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col md="6">
                        <div className="tengah">
                            <h2 className="big-text font-weight-bold">Ronaldo<br/>Kereh</h2>
                            <h4 className="font-weight-bold">A Simple Person, Loves To Learn New Things,</h4>
                            <div className="mt-4">
                                <a href="https://github.com/kereh">
                                    <button className="btn btn-primary w-30 mr-3">Another Project</button>
                                </a>
                                <Link href="/about">
                                    <a href="/about" as="about">
                                        <button className="btn btn-outline-primary w-25">More...</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" className="text-center">
                        <div className="tengah-gambar">
                            <img src={Profile} alt="Profile" width={275} height={275}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                .tengah {
                    margin-top: 15vh;
                    color: #757678;
                }
                .tengah-gambar {
                    margin-top: 10vh;
                }
                .big-text {
                    font-size: 60px;
                    color: #757678;
                }
            `}</style>
        </Fragment>
    );
}
