import React, { Component } from 'react';
import { Form } from 'react-bootstrap';



export default class YearSlider extends Component {
    render() {
        return (
            <div>
            <Form.Label classname="yearForm" style = {{color:'#ffffff'}}>Välj årtal</Form.Label>
            <Form.Range input type="range"></Form.Range>
            </div>

        );
    }
}