import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

/*Kategori knapparna på startsidan, knapparna innehåller ikoner och länkas till respektive kategori*/
export default class ButtonList extends Component {
    render() {
        return (
            <div>
               <div className="d-grid gap-4">
  <Button className="knapp" style = {{background:'#8443C6'}} size="lg">
    <Link to="/global" className="buttonListTitle" >Global Temperatur 
    <img src={'image/hot.png'} style={{width:"35px"}} alt="termometer" /></Link>
  </Button>
  <Button className="knapp" style = {{background:'#8443C6'}} size="lg">
  <Link to="/havs" className="buttonListTitle">Havsnivå <img src={'image/huset.png'} style={{width:"35px"}} alt="hus" /></Link>
  </Button>
  <Button className="knapp" style = {{background:'#8443C6'}} size="lg">
  <Link to="/fossila" className="buttonListTitle">Fossila utsläpp <img src={'image/chimney.png'} style={{width:"35px"}} alt="fossila utsläpp" /></Link>
  </Button>
  <Button className="knapp" style = {{background:'#8443C6'}} size="lg">
  <Link to="/glaciär" className="buttonListTitle">Glaciär storlek <img src={'image/iceberg.png'} style={{width:"35px"}} alt="glaciär"/></Link>
  </Button>
</div>
            </div>
        );
    }
}