import React from "react";

import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, ListGroup, ListGroupItem, Row } from "reactstrap";

import RepairImage from '../assets/repair.svg';
import ConstructionImage from '../assets/construction.svg';
import MaintenanceImage from '../assets/maintenance.svg';
import SecurityImage from '../assets/security.svg';
import TransportationImage from '../assets/transportation.svg';

let ServicesHomePage = () => {
    return (
        <>
            <Row className="p-0 m-0">
                <Col className="bg-primary text-light text-center py-3" tag={"h1"}>Services We Offer</Col>
            </Row>

            <Row className="p-0 m-0">
                <Col md={4}>
                    <Card className="bg-dark my-3 shadow">
                        <CardImg top className="p-2" width="100%" src={RepairImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">HVAC HEATING, COOLING, VENTILATION & FIRE DAMPERS</CardTitle>
                            <ul className="p-2 m-0">
                                <li>Installation & Commissioning</li>
                                <li>Repairs & Maintenance</li>
                                <li>HVAC Drawings - Ducting and Air Distribution Layout</li>
                                <li>1st Fix & 2nd Fix Ducting Installation</li>
                                <li>Air Balancing, Testing, Commissioning & Issue of COC</li>
                                <li>Supply & Installation of Motorised Fire Dampers</li>
                                <li>Installation & Repairs to Pumps, Motors and Valves</li>
                                <li>Chilled Water Pipe Insulation & Waterproofing</li>
                                <li>HVAC Pipe Welding & Pressure Testing</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark my-3 shadow">
                        <CardImg top className="p-2" width="100%" src={ConstructionImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">BUILDING CONSTRUCTION</CardTitle>
                            <ul className="p-2 m-0">
                                <li>Building Infrastructure and Decking</li>
                                <li>Engineer and Architect Provision and Referral</li>
                                <li>Painting, Tiling, Roofing, Plumbing, Electrical</li>
                                <li>Shopfitting, Dry Walling, and Ceilings</li>
                                <li>Aluminium Windows, Doors and Balconies</li>
                                <li>Steel Fencing, Burglar Guards, Motorised Gates and Awning</li>
                                <li>Concreting and Paving of Driveways and Yard</li>
                                <li>Retaining Walls Design and Construction</li>
                                <li>Earthworks, Including Storm Water Drains</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark my-3 shadow">
                        <CardImg top className="p-2" width="100%" src={MaintenanceImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">BUILDING MAINTENANCE</CardTitle>
                            <ul className="p-2 m-0">
                                <li>Painting – Interior, Exterior, Roof, and Fencing</li>
                                <li>High Pressure Cleaning of Roofs and Yard</li>
                                <li>Electrical and Plumbing Maintenance and Repairs</li>
                                <li>Gate Motor Service & Repairs</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark my-3 shadow">
                        <CardImg top className="p-2" width="100%" src={SecurityImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">SECURITY & FENCING</CardTitle>
                            <ul className="p-2 m-0">
                                <li>Securing Cameras Supply & Installation</li>
                                <li>Supply and Installation of Electrical Fencing</li>
                                <li>Steel, Precast and Brick & Block Fencing including Razor Wire</li>
                                <li>Steel Burglar Guards Design, Manufacture & Fitment</li>
                                <li>Motorised Gates, Including Installation and Electrical</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark my-3 shadow">
                        <CardImg top className="p-2" width="100%" src={TransportationImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">TRANSPORTATION</CardTitle>
                            <ul className="p-2 m-0">
                                <li>Furniture and Office removals</li>
                                <li>Rubble Removal</li>
                                <li>Transportation of Sand, Bricks/Blocks, Concrete, Tiles etc</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ServicesHomePage;