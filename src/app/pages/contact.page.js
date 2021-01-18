import { Card, CardImg, Col, Row } from "reactstrap";

import AddressImage from "../assets/address.svg";
import ContactForm from "../components/contact.form";
import EmailImage from "../assets/email.svg";
import PhoneNumberImage from "../assets/phonenumber.svg";
import React from "react";

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
                                <Col className="text-light" tag="p">Main Office: <span className="text-muted">17 School Road, Parkgate, Riet River, Verulam, 4339</span></Col>
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
                            <Row className="p-0 m-0">
                                <Col className="text-light" tag="p">Main Office: <span className="text-muted">+27 32 537 6003</span></Col>
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
                                <Col className="text-light" tag="p">Customer Support: <span className="text-muted">info@coollake.co.za</span></Col>
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