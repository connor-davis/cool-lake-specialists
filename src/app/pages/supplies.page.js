import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

import ElectricalImage from '../assets/electrical.svg';
import EngineeringImage from '../assets/repair.svg';
import HardwareImage from '../assets/hardware.svg';
import React from "react";

let SuppliesHomePage = () => {
    return (
        <>
            <Row className="p-0 m-0">
                <Col className="bg-primary text-light text-center py-3" tag={"h1"}>Supplies We Offer</Col>
            </Row>

            <Row className="p-0 m-0">
                <Col md={4}>
                    <Card className="bg-dark my-3 shadow">
                        <CardImg top className="p-2" width="100%" src={EngineeringImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Engineering & Industrial</CardTitle>
                            <ul className="p-2 m-0">
                                <li>Mild & Heavy Duty Steel</li>
                                <li>Aluminium Supplies</li>
                                <li>Lubricants</li>
                                <li>Specialised Bolts, Nuts, Brackets, Steel Trays, Rodding, Etc</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark my-3 shadow">
                        <CardImg top className="p-2" width="100%" src={ElectricalImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Electrical</CardTitle>
                            <ul className="p-2 m-0">
                                <li>Cabling including Control Wires</li>
                                <li>Switchgears – Contactors, MPU's, Breakers, Fuse Holders, Fuses, Isolators, Relays, Terminals, Etc</li>
                                <li>Light Fittings, Downlighters and Light Bulbs</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark my-3 shadow">
                        <CardImg top className="p-2" width="100%" src={HardwareImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Hardware</CardTitle>
                            <ul className="p-2 m-0">
                                <li>Paints</li>
                                <li>Timber</li>
                                <li>Concrete Slabs</li>
                                <li>Building, Plastering & Umgeni Sand</li>
                                <li>Building, Plastering & Umgeni Sand</li>
                                <li>Concrete</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default SuppliesHomePage;