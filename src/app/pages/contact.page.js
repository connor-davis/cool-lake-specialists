import { Card, CardImg, Col, Row } from "reactstrap";

import AddressImage from "../assets/address.svg";
import ContactForm from "../components/contact.form";
import EmailImage from "../assets/email.svg";
import PhoneNumberImage from "../assets/phonenumber.svg";
import SocialMediaImage from "../assets/socialmedia.svg";
import FacebookImage from "../assets/facebook.svg";
import InstagramImage from "../assets/instagram.svg";
import React from "react";
import { Link } from "react-router-dom";

let ContactPage = () => {
    return (
        <>
            <Row className="p-0 m-0">
                <Col className="bg-primary text-light text-center py-3" tag={"h1"}>Contact Us</Col>
            </Row>
            <Row className="p-0 m-0">
                <Col md={6}>
                    <Row className="p-0 m-0">
                        <Col className="text-light text-center py-3" tag={"h4"}>Contact Information</Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col md={3}>
                            <Card className="bg-dark my-3 shadow">
                                <CardImg top className="p-2" width="100%" src={AddressImage} alt="Card image cap" />
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row className="p-0 m-0">
                                <Col className="text-primary py-3" tag="h5">Address</Col>
                            </Row>
                            <Row className="p-0 m-0">
                                <span className="pl-3 text-light" tag="p">Main Office:</span>
                                <div className="text-muted pl-3">
                                    <Row className="p-0 m-0 pb-3">17 School Road, Parkgate, Riet River, Verulam, 4339</Row>
                                    <Row className="p-0 m-0 pb-3">26 Crassula Drive, Micropark, Unit 64, Cornubia, 4339</Row>
                                    <Row className="p-0 m-0 pb-3">P.O. Box 60385, Phoenix, 4080</Row>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col md={3}>
                            <Card className="bg-dark my-3 shadow">
                                <CardImg top className="p-2" width="100%" src={PhoneNumberImage} alt="Card image cap" />
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row className="p-0 m-0">
                                <Col className="text-primary py-3" tag="h5">Phone Numbers</Col>
                            </Row>
                            <Row className="p-0 m-0 pb-3">
                                <Col md={6}>
                                    <Row className="pl-3 text-light" tag="p">Main Office:</Row>
                                </Col>
                                <Col md={6}>
                                    <Row className="text-muted p-0 m-0">+27 62 323 4076</Row>
                                    <Row className="text-muted p-0 m-0">+27 31 536 2216</Row>
                                </Col>
                            </Row>
                            <Row className="p-0 m-0 pb-3">
                                <Col md={6}>
                                    <Row className="pl-3 text-light" tag="p">Yosheel Murugasen:</Row>
                                </Col>
                                <Col md={6}>
                                    <Row className="text-muted p-0 m-0">+27 83 537 1586</Row>
                                </Col>
                            </Row>
                            <Row className="p-0 m-0 pb-3">
                                <Col md={6}>
                                    <Row className="pl-3 text-light" tag="p">Mervin Murugasen:</Row>
                                </Col>
                                <Col md={6}>
                                    <Row className="text-muted p-0 m-0">+27 83 791 2215</Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col md={3}>
                            <Card className="bg-dark my-3 shadow">
                                <CardImg top className="p-2" width="100%" src={EmailImage} alt="Card image cap" />
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row className="p-0 m-0">
                                <Col className="text-primary py-3" tag="h5">Email Address</Col>
                            </Row>
                            <Row className="p-0 m-0">
                                <Col md={6}>
                                    <Row className="pl-3 text-light" tag="p">Customer Support:</Row>
                                </Col>
                                <Col md={6}>
                                    <Row className="text-muted p-0 m-0">contact@coollake.co.za</Row>
                                    <Row className="text-muted p-0 m-0">yosheel@coollake.co.za</Row>
                                    <Row className="text-muted p-0 m-0">mervin@coollake.co.za</Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col md={3}>
                            <Card className="bg-dark my-3 shadow">
                                <CardImg top className="p-2" width="100%" src={SocialMediaImage} alt="Card image cap" />
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row className="p-0 m-0">
                                <Col className="text-primary py-3" tag="h5">Social Media</Col>
                            </Row>
                            <Row className="p-2 m-0">
                                <a href="https://facebook.com/cook.lake.14" target="_blank" rel="noopener noreferrer">
                                    <img className="mx-2" src={FacebookImage} alt="image cap" width={30} />
                                </a>
                                <a href="https://instagram.com/coollakecontractors?igshid=134fcjormpgwn" target="_blank" rel="noopener noreferrer">
                                    <img className="mx-2" src={InstagramImage} alt="image cap" width={30} />
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row className="p-0 m-0">
                        <Col className="text-light text-center py-3" tag={"h4"}>Get In Touch</Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <ContactForm />
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default ContactPage;