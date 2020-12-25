import React, { Fragment } from "react";
import { Container,Row,Col } from "react-bootstrap";

import FaceIcon from "../../assets/img/facebook.png";
import WhatIcon from "../../assets/img/whatsapp.png";
import GitIcon from "../../assets/img/github.png";

export default function Footer () {
    return (
        <Fragment>
            <Container>
                <Row >
                    <Col sm="12" className="text-center">
                        <div className="footer">
                            <h4 className="mb-2 font-weight-bold">You Can Hit Me On</h4>
                            <a href="https://www.facebook.com/people/Ronaldo-Kereh/100026505135031" tabIndex="1">
                                <img src={FaceIcon} className="mr-3" alt="Insta" width={50} />
                            </a>
                            <img src={WhatIcon} className="mr-3" alt="What" width={60} />
                            <a href="https://github.com/kereh">
                                <img src={GitIcon} alt="Git" width={60} /> 
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
            .footer {
                margin-top: 10vh;
                margin-bottom: 2vh;
                color: #757678;
            }
            `}</style>
        </Fragment>
    );
}