import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Bieu_do extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Chó', uv: 0, pv: 5, amt: 0},
        {name: 'Mèo', uv: 0, pv: 6, amt: 0},
        {name: 'Cánh cụt', uv: 0, pv: 8, amt: 0},
        {name: 'Chim', uv: 0, pv: 10, amt: 0},
        {name: 'Chuột', uv: 0, pv: 3, amt: 0},
      ]
    }
  }

  render() {
    const { data } = this.state;

    return (
        <>
      <ResponsiveContainer className="chart" height={300}>
        <LineChart 
         width={600} 
         height={300} 
         data={data}
         margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <div>
                <Link to="">
                    <Button style={{marginLeft: "20px",marginTop:"50px"}}>Quay Lại</Button>
                </Link>
      </div>
      </>
    );
  }
}

export default Bieu_do;