import React, { PureComponent } from 'react';
/*mport { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import PageTitle from '../PageTitle';*/

import {
    Row,
    Col,    
    Button    
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';
import './styles/bracket.css';

const bracketJSON = {
    "accords": [
        {
            "uuid": "a820c76a-fcad-4fa4-a61e-27f91956ad3a",
            "label": "Terms"
        },
        {
            "uuid": "746cc43d-d4da-49bd-a141-08cff1265fda",
            "label": "Assignment"
        }
    ],
    "clauses": [
        {
            "by": "3f26460d-3bc8-43e2-b376-3bcfb310d4cb",
            "to": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "type": "contract",
            "uuid": "09d147fb-e3a5-4905-bb4f-7d3d82089774",
            "view": "PO",
            "index": 0,
            "label": "Issue Master PO",
            "accord": "a820c76a-fcad-4fa4-a61e-27f91956ad3a"
        },
        {
            "by": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "to": "3f26460d-3bc8-43e2-b376-3bcfb310d4cb",
            "type": "signature",
            "uuid": "16b2ae9e-d9b9-47df-805d-93f0b444e4d8",
            "view": "PO Acceptance",
            "index": 1,
            "label": "Accept Master PO",
            "accord": "a820c76a-fcad-4fa4-a61e-27f91956ad3a"
        },
        {
            "by": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "to": "3f26460d-3bc8-43e2-b376-3bcfb310d4cb",
            "type": "contract",
            "uuid": "74dd3924-07a9-46b7-9c03-626cdb51fb57",
            "view": "Assignment",
            "index": 2,
            "label": "Assign Contract",
            "accord": "746cc43d-d4da-49bd-a141-08cff1265fda"
        },
        {
            "by": "3f26460d-3bc8-43e2-b376-3bcfb310d4cb",
            "to": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "type": "signature",
            "uuid": "5c249072-e037-44d4-8716-41926ba6766e",
            "view": "Assignment Signature",
            "index": 3,
            "label": "Agree to Assignment",
            "accord": "746cc43d-d4da-49bd-a141-08cff1265fda"
        },
        {
            "by": "09a72b13-7576-49ba-8c19-5aae8ed5e152",
            "to": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "type": "signature",
            "uuid": "deda32da-711a-46f6-9114-558224a4d024",
            "view": "Assignment Signature",
            "index": 4,
            "label": "Accept Assignment",
            "accord": "746cc43d-d4da-49bd-a141-08cff1265fda"
        },
        {
            "by": "0f4662bc-52fb-4522-a4d8-856c489e10df",
            "to": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "type": "cargo_receipt",
            "uuid": "2c2179cc-d7ff-4bce-80af-c0d235275538",
            "view": "Cargo Receipt",
            "index": 5,
            "label": "Receive Cargo Notice"
        },
        {
            "by": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "to": "09a72b13-7576-49ba-8c19-5aae8ed5e152",
            "type": "invoice",
            "uuid": "003e8b52-b2f8-45a9-ad87-2150af9e5ec7",
            "view": "Invoice",
            "index": 6,
            "label": "Invoice to IMT"
        },
        {
            "by": "09a72b13-7576-49ba-8c19-5aae8ed5e152",
            "to": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "type": "payment",
            "uuid": "8549b2a9-d2e6-4593-b4f0-936cdccac30d",
            "view": "Payment",
            "index": 7,
            "label": "Supplier Payment",
            "payment": {
                "amount": "1,000.00",
                "currency": "USD"
            }
        },
        {
            "by": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "to": "0f4662bc-52fb-4522-a4d8-856c489e10df",
            "type": "payment",
            "uuid": "86c7e6cf-d797-416b-9b08-dc7769d0aaed",
            "view": "Payment",
            "index": 8,
            "label": "Payment to Warehouse",
            "payment": {
                "amount": "900.00",
                "currency": "USD"
            }
        },
        {
            "by": "0f4662bc-52fb-4522-a4d8-856c489e10df",
            "to": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "type": "shipment_notice",
            "uuid": "77edb681-dffb-4fb6-925a-a25adb62aa87",
            "view": "Shipment Notice",
            "index": 9,
            "label": "Shipment Notice"
        },
        {
            "by": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "to": "09a72b13-7576-49ba-8c19-5aae8ed5e152",
            "type": "shipment",
            "uuid": "3e1990bb-d540-4694-b078-c308ccd8b975",
            "view": "Shipment",
            "index": 10,
            "label": "Ship Goods"
        },
        {
            "by": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "to": "3f26460d-3bc8-43e2-b376-3bcfb310d4cb",
            "type": "invoice",
            "uuid": "520c6b4c-b494-4ad9-b4b0-990993c0b2b1",
            "view": "Invoice",
            "index": 11,
            "label": "Invoice on behalf of IMT"
        },
        {
            "by": "3f26460d-3bc8-43e2-b376-3bcfb310d4cb",
            "to": "09a72b13-7576-49ba-8c19-5aae8ed5e152",
            "type": "payment",
            "uuid": "12e3e469-7c5d-409c-9cca-f3e93a063a1e",
            "view": "Payment",
            "index": 12,
            "label": "Make Payment",
            "payment": {
                "amount": "1,100.00",
                "currency": "USD"
            }
        }
    ],
    "participants": {
        "09a72b13-7576-49ba-8c19-5aae8ed5e152": {
            "role": "IMT",
            "uuid": "09a72b13-7576-49ba-8c19-5aae8ed5e152",
            "email": "",
            "index": 2,
            "userid": "IMT",
            "display_name": "IMT"
        },
        "0f4662bc-52fb-4522-a4d8-856c489e10df": {
            "role": "warehouse",
            "uuid": "0f4662bc-52fb-4522-a4d8-856c489e10df",
            "email": "",
            "index": 0,
            "userid": "DBSchenker",
            "display_name": "DBSchenker"
        },
        "3f26460d-3bc8-43e2-b376-3bcfb310d4cb": {
            "role": "buyer",
            "uuid": "3f26460d-3bc8-43e2-b376-3bcfb310d4cb",
            "email": "",
            "index": 3,
            "userid": "Flex",
            "display_name": "Flex"
        },
        "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f": {
            "role": "seller",
            "uuid": "9a0f0a4f-d62f-45ef-87f5-0dd7edc94c0f",
            "email": "",
            "index": 1,
            "userid": "Wintec",
            "display_name": "Wintec"
        }
    }
};

class Bracket extends PureComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',            
        }
    }

    handleClick() {
        console.log('Editing term sheet...');
        this.props.push

    }

    render() {
        return (
            <div className="container">
                <h3>Term Sheet</h3>
            <Row className="bracket-overview">
                <Col md={10}>
                    <Row>
                        <Col md={1} className="bracket-top-edge"></Col>
                        <Col md={10}></Col>
                        <Col md={1} className="bracket-top-edge"></Col>
                    </Row>
                    <Row className="bracket-outer-line">
                        <Col md={3}>
                            <Row>
                                PCC
                            </Row>
                            <Row className="pt10">
                                <Col md={5}></Col>
                                <Col  md={1}>
                                    <div className="bracket-vertical-line"></div>
                                </Col>
                                <Col  md={5}></Col>                              
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row>
                                ADC
                            </Row>
                            <Row className="pt10">
                                <Col md={5}></Col>
                                <Col  md={1}>
                                    <div className="bracket-vertical-line"></div>
                                </Col>
                                <Col  md={5}></Col>                              
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row>
                                IMT
                            </Row>
                            <Row className="pt10">
                                <Col md={5}></Col>
                                <Col  md={1}>
                                    <div className="bracket-vertical-line"></div>
                                </Col>
                                <Col  md={5}></Col>                              
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row>
                                GE
                            </Row>
                            <Row className="pt10">
                                <Col md={5} className="pt10 bracket-horizontal-line-outer">
                                    <div className="bracket-horizontal-line"><span>PO Issued</span><i className="fa fa-angle-left" aria-hidden="true"></i></div>
                                </Col>
                                <Col  md={1}>
                                    <div className="bracket-vertical-line"></div>
                                </Col>
                                <Col  md={5}></Col>                              
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1} className="bracket-bottom-edge"></Col>
                        <Col md={10}></Col>
                        <Col md={1} className="bracket-bottom-edge"></Col>
                    </Row>
                </Col>
                <Col md={2} className="edit-term-sheet-btn">
                    <div className="btn btn-success">
                        <a href="/editTermSheet">Edit Term Sheet</a>
                    </div>
                </Col>
            </Row>
            </div>
        );
    }
}
export default Bracket;
