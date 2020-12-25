import React, { Fragment } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";

export default function index () {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="tengah">
                            <h2 className="text-center">A Little Bit About Me</h2>
                            <Card className="border-0">
                                <Card.Body>
                                    <p className="text-center">
                                    Hi my name is Ronaldo Kereh, Originally from Manado - North Sulawesi - Indonesia,<br/>
                                    I became interested in programming when I was 13 years old, the first programming language I learned was Python
                                    </p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                * {
                    color: #757678;
                }
                .tengah {
                    margin-top: 10vh;
                    color: #757678;
                }
            `}</style>
        </Fragment>
    );
}