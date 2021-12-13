import { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

class MyPieChart extends Component {
  handleYear = (e) => {
    if (e.key === "Enter") {
      this.props.onYearFilter(this.props.chartName, e.target.value);
    }
  };
  render() {
    let co2 = this.props.CO2Emission;
    if (co2 === undefined) return <p>Data laddas eller finns inte.</p>;
    const dataPieChart = [
      { name: "Gasformigt bränsle", value: co2["Gas Fuel"] },
      { name: "Flytande bränsle", value: co2["Liquid Fuel"] },
      { name: "Fast bränsle", value: co2["Solid Fuel"] },
    ];

    const COLORS = ["#FFBB28", "#0088FE", "#FF8042", "#00C49F"];
    /* Sålla bort färger färgnedsättning/färgblindhet */

    return (
      <div style={{ width: '300px', height: "450px"}}>
        <input
          type="text"
          placeholder="Skriv ett årtal"
          onKeyDown={(e) => this.handleYear(e)}
        ></input>
        <ResponsiveContainer width={"100%"} height={"100%"}>
        <PieChart>
          <Pie
            data={dataPieChart}
            dataKey="value"
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={90}
            fill="#82ca9d"
            label
          >
            <Cell fill={COLORS[0]} />
            <Cell fill={COLORS[1]} />
            <Cell fill={COLORS[2]} />
            <Cell fill={COLORS[3]} />
          </Pie>
          <Legend layout="vertical"></Legend>
        </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default MyPieChart;
