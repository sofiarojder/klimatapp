import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import NavbarComp from './Components/NavbarComp';
import ButtonList from './Components/Buttonlist';
import StartText from './Components/StartText';
import YearSlider from './Components/Slider';
import ButtonLinks from './Components/ButtonLinks';
import PlaceHolder from './Components/PlaceHolder';
import FossileFuel from './Components/FossileFuel';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InfoBtn from './Components/InfoBtn';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavbarComp></NavbarComp>
     <Switch>

     {/*STARTSIDA*/}
    <Route path="/" exact>
      <StartText/>
      <ButtonList/>
    </Route>

    {/*GLOBAL TEMP SIDA*/}
    <Route path="/global"> 
    <InfoBtn/>
    <PlaceHolder/>
    <YearSlider/>
     <ButtonLinks/>
    </Route>

    {/*HAVSNIVÅ SIDA*/}
    <Route path="/havs">
      <InfoBtn/>
      <PlaceHolder/>
      <YearSlider/>
      <ButtonLinks/>
      </Route>

      {/*FOSSILA UTSLÄPP SIDA*/}
    <Route path="/fossila">
      <FossileFuel/>
      <YearSlider/>
      <ButtonLinks/>
       </Route>
       
       {/*GLACIÄR STORLEK SIDA*/}
    <Route path="/glaciär">
      <InfoBtn/>
      <PlaceHolder/>
      <YearSlider/>
      <ButtonLinks/>
    </Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}



export default App;
