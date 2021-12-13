import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

/*Bild*/
export default class PlaceHolder extends Component {
    render() {
        return (
            <div>
  <Card style={{ width: '200px' }}>
     <Card.Img style={{ heigth: '400px' }} src={'image/hot.png'}  />
  </Card>

  </div>
           
        );
    }
}