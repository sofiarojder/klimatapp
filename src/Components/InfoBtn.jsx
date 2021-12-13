import React, { Component } from 'react';
import {Button} from 'react-bootstrap'


/*Infoknapp*/
export default class InfoBtn extends Component {
    render() {
        return (
            <div>
                <Button classname="Infoknapp" style={{color:"white", background:"#000"}}>i</Button>
            </div>

        );
    }
}