import { Col, Row } from "reactstrap";

import AirconFive from "../assets/aircon_5.png";
import AirconFour from "../assets/aircon_4.png";
import AirconOne from "../assets/aircon_1.png";
import AirconThree from "../assets/aircon_3.png";
import AirconTwo from "../assets/aircon_2.png";
import ContactPage from "./contact.page";
import CoolLakeCarousel from "../components/carousel";
import HomeImageOne from "../assets/home_img.png";
import React from "react";

let HomePage = () => {
    let images = [
        {
            Component: () => (
                <img className="p-2" width="100%" height={300} style={{ objectFit: "scale-down" }} src={AirconOne} alt="Card image cap" />
            )
        },
        {
            Component: () => (
                <img className="p-2" width="100%" height={300} style={{ objectFit: "scale-down" }} src={AirconTwo} alt="Card image cap" />
            )
        },
        {
            Component: () => (
                <img className="p-2" width="100%" height={300} style={{ objectFit: "scale-down" }} src={AirconThree} alt="Card image cap" />
            )
        },
        {
            Component: () => (
                <img className="p-2" width="100%" height={300} style={{ objectFit: "scale-down" }} src={AirconFour} alt="Card image cap" />
            )
        },
        {
            Component: () => (
                <img className="p-2" width="100%" height={300} style={{ objectFit: "scale-down" }} src={AirconFive} alt="Card image cap" />
            )
        }
    ];

    return (
        <>
            <Row className="p-0 m-0 justify-content-center">
                <img src={HomeImageOne} alt="homeimg1" style={{ width: "100%", height: "auto" }} />
            </Row>

            <Row className="p-0 m-0">
                <Col className="bg-primary text-light text-center py-5" tag={"h1"}>A Specialist For Every Need</Col>
            </Row>

            <Row className="p-0 m-0">
                <p className="px-2 pt-5 pb-0 text-shadow">Cool Lake Specialist Contractors CC was founded in the Year 2006. Since then, we have been providing our services to various companies on both an industrial and domestic level. Cool Lake is an empowered company with 100% Black Ownership, BEE Level 1.</p>
            </Row>

            <Col className="p-0 m-0 pb-5">
                <CoolLakeCarousel images={images} />
            </Col>

            <ContactPage />
        </>
    );
};

export default HomePage;