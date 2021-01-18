import { Col, Row } from "reactstrap";

import ContactPage from "./contact.page";
import HomeImageOne from "../assets/home_img_01.png";
import React from "react";

let HomePage = () => {
    return (
        <>
            <Row className="p-0 m-0 justify-content-center">
                <img src={HomeImageOne} alt="homeimg1" style={{ width: "100%", height: "auto" }} />
            </Row>

            <Row className="p-0 m-0">
                <Col className="bg-primary text-light text-center py-5" tag={"h1"}>A Specialist For Every Need</Col>
            </Row>

            <Col>
                <p className="px-2 py-5">Cool Lake Specialist Contractors CC was founded in the Year 2006. Since then, we have been providing our services to various companies on both an industrial and domestic level in the Kwazulu Natal Region. Cool Lake is an empowered company with 100% Black Ownership.</p>
            </Col>

            <ContactPage />
        </>
    );
};

export default HomePage;