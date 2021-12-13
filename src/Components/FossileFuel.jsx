import React, { Component } from "react";
import MyPieChart2 from "./MyPieChart2";
import InfoBtn from "./InfoBtn";

class App extends Component {
  state = {
    CO2Emission: [],
    indexYear1: 1,
    indexYear2: 200,
  };

  /*Hämtar data från API och väntar tills klar*/
  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ CO2Emission: data });
  }

  handleYearFilter = (chartName, Year) => {
    let index = this.state.CO2Emission.findIndex(
      (co2) => co2.Year === parseInt(Year)
    );
    if (index !== -1) {
      switch (chartName) {
        case "Pie1":
          this.setState({ indexYear1: index });
          break;
        case "Pie2":
          this.setState({ indexYear2: index });
          break;
      }
    } else {
      alert(
        "Året du sökte på finns inte i uppmätt. Välj ett årtal mellan 1751 och 2014 och försök igen."
      );
    }
  };
  /*Bestämmer vad som ska rendreras*/
  render() {
    return (
      <div className="App">
        <h1>Hur mycket fossila bränslen använder vi?</h1>
        <p>
          I den här applikationen hittar du data mellan 1751 och 2014. Fyll i
          två årtal så kan du se skillnaden direkt.
        </p>
        <InfoBtn />
        <section className="diagramBox">
          <MyPieChart2
            chartName="Pie1"
            CO2Emission={this.state.CO2Emission[this.state.indexYear1]}
            onYearFilter={this.handleYearFilter}
          ></MyPieChart2>
          <MyPieChart2
            chartName="Pie2"
            CO2Emission={this.state.CO2Emission[this.state.indexYear2]}
            onYearFilter={this.handleYearFilter}
          ></MyPieChart2>
        </section>
      </div>
    );
  }
}

export default App;
