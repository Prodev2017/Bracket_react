import React, { PureComponent } from 'react';
import {
    Row,
    Col,    
    Button    
} from 'react-bootstrap';
import './styles/EditTermSheet.css';

class EditTermSheet extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="container">
                <h3>The Term Sheet</h3>    
                <Row>
                    <Col md={8}>
                        <Row>
                            <table className="table table-bordered">
                                <thead className="light-gray">
                                <tr>
                                    <th>Day</th>                                    
                                    <th>IMT</th>
                                    <th>ADC</th>
                                    <th>PCC</th>
                                    <th>GE</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="purple">0</td>
                                    <td><input type="text" value="IMT Buys"/></td>
                                    <td><input type="text" value="ADC receives"/></td>
                                    <td><input type="text" value="PCC ships"/></td>
                                    <td><input type="text" value=""/></td>
                                </tr>
                                <tr>
                                    <td className="purple">15</td>
                                    <td><input type="text" value="IMT Pays"/></td>
                                    <td><input type="text" value=""/></td>
                                    <td><input type="text" value="PCC gets paid"/></td>
                                    <td><input type="text" value=""/></td>
                                </tr>
                                <tr>
                                    <td className="purple">90</td>
                                    <td><input type="text" value="IMT invoices"/></td>
                                    <td><input type="text" value="ADC ships, ADC gets paid"/></td>
                                    <td><input type="text" value=""/></td>
                                    <td><input type="text" value="GE receives"/></td>
                                </tr>
                                <tr>
                                    <td className="purple">210</td>
                                    <td><input type="text" value="IMT gets paid"/></td>
                                    <td><input type="text" value=""/></td>
                                    <td><input type="text" value=""/></td>
                                    <td><input type="text" value="GE pays"/></td>
                                </tr>
                                </tbody>
                            </table>
                        </Row>
                        <Row>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>ADC</th>                                    
                                    <th>C2C</th>
                                    <th>Amt</th>
                                    <th>CoC</th>
                                    <th>Interest Cost</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Pre shipment</td>
                                    <td className="pink"><input className="pink" type="text" value="75"/></td>
                                    <td className="pink"><input className="pink" type="text" value="100"/></td>
                                    <td className="purple"><input className="purple" type="text" value="2.50%"/></td>
                                    <td>0.51</td>
                                </tr>
                                <tr>
                                    <td>Post shipment</td>
                                    <td className="pink"><input className="pink" type="text" value="120"/></td>
                                    <td className="pink"><input className="pink" type="text" value="120"/></td>
                                    <td className="purple"><input className="purple" type="text" value="2.50%"/></td>
                                    <td>0.99</td>
                                </tr>
                                <tr>
                                    <td>Other Costs</td>
                                    <td><input type="text" value=""/></td>
                                    <td><input type="text" value=""/></td>
                                    <td><input type="text" value=""/></td>
                                    <td><input type="text" value="0.4"/></td>
                                </tr>                               
                                </tbody>
                            </table>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <table className="table table-bordered">                                
                                <tbody>
                                <tr>
                                    <td>Markup</td>
                                    <td>20</td>                                    
                                </tr>
                                <tr>
                                    <td>Sales Price</td>
                                    <td>140</td>                                    
                                </tr>
                                <tr>
                                    <td>CoC</td>
                                    <td>4.80%</td>                          
                                </tr>
                                <tr>
                                    <td> Sales-ex-Interest </td>
                                    <td>135.20</td>                                    
                                </tr>
                                <tr>
                                    <td>IMT costs</td>
                                    <td>1.90</td>                                    
                                </tr>
                                <tr>
                                    <td>Sales-w-IMT</td>
                                    <td>137.10</td>                                    
                                </tr>
                                <tr>
                                    <td>Gain</td>
                                    <td>2.90</td>                                    
                                </tr>
                                <tr>
                                    <td>Gain Share</td>
                                    <td>30%</td>                                    
                                </tr>
                                <tr className="light-gray">
                                    <td>New Sales Price</td>
                                    <td>137.97</td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md={1}></Col>
                </Row>    
                <Row className="pt10 pr20">
                    <Col md={8}></Col>
                    <Col md={2} className="edit-term-sheet-btn">
                        <div className="btn btn-danger">
                            <a href="/brackets">Cancel</a>
                        </div>
                    </Col>
                    <Col md={2} className="edit-term-sheet-btn">
                        <div className="btn btn-success">
                            <a href="#">Submit</a>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default EditTermSheet;
