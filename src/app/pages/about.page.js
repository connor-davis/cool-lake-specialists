import React from "react";

import { Col, Row } from "reactstrap";

let AboutPage = () => {
    return (
        <>
            <Row className="p-0 m-0">
                <Col className="bg-primary text-light text-center py-3" tag={"h1"}>Our Vision</Col>
            </Row>

            <Col className="p-0 m-0">
                <p className="px-2 py-4">To be a trustworthy contractor in providing quality service and workmanship beyond expectation
to the Domestic, Commercial and Industrial Sector, adding value to the economy.</p>
            </Col>

            <Row className="p-0 m-0">
                <Col className="bg-primary text-light text-center py-3" tag={"h1"}>What We Do</Col>
            </Row>

            <Col className="p-0 m-0">
                <p className="px-2 py-4">In order to provide specialised services, we intend continuing and taking on the role of the Main Contractor
                for small and medium size projects to the Domestic, Commercial and Industrial Business Sector. As the
                Main Contractor, we focus on clear communication with the clients prioritising their requirements and
objectives in planning, designing and execution of all tasks during and after the processes.</p>
            </Col>

            <Row className="p-0 m-0">
                <Col className="bg-primary text-light text-center py-3" tag={"h1"}>Mission Statement</Col>
            </Row>

            <Col className="p-0 m-0">
                <p className="px-2 py-4">The following emphasis is heeded during Planning & Execution:</p>
                <ul>
                    <li>Providing a detailed schedule plan.</li>
                    <li>Provide high quality and affordable products.</li>
                    <li>Keep open and clear communication with the client's teams.</li>
                    <li>Monitor and track progress of projects and attend to any deviations.</li>
                    <li>Ensure project is managed and supervised closely for quality assurance.</li>
                    <li>Provide safe working conditions and deliver quality work within a reasonable time frame.</li>
                    <li>Carry out the necessary testing and commissioning of all project on time.</li>
                    <li>Create and cultivate long term relationships with clients.</li>
                </ul>
            </Col>
        </>
    );
}

export default AboutPage;