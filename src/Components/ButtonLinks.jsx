import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom';



/*Knappar som leder till nya sidor, innehåller ikoner(menyn längst ner)*/
export default class ButtonLinks extends Component {
    render() {
        return (
            <div>
    <ButtonGroup size="lg" className="col-lg-6">
    <Button className="länk" style = {{background:'#8443C6'}}>
    <Link to="/global"><img src={'image/hot.png'} style={{width:"40px"}} alt="termometer"/></Link>
    </Button>
    <Button className="länk" style = {{background:'#8443C6'}}>
    <Link to="/havs"><img src={'image/huset.png'} style={{width:"40px"}} alt="hus"/></Link>
    </Button>
    <Button className="länk" style = {{background:'#8443C6'}}>
    <Link to="/fossila"><img src={'image/chimney.png'} style={{width:"40px"}} alt="fossila utsläpp"/></Link>
    </Button>
    <Button className="länk" style = {{background:'#8443C6'}}>
    <Link to="/glaciär"><img src={'image/iceberg.png'} style={{width:"40px"}} alt="glaciär"/></Link>
    </Button>
  </ButtonGroup>

            </div>

        );
    }
}