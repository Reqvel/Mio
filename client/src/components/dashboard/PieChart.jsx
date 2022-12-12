import React from 'react'
import { PieChart as PieChartRecharts, 
         Pie, 
         Cell,
         Tooltip, 
         ResponsiveContainer } from 'recharts';

const PieChart = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['red', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer>
      <PieChartRecharts>
        <Tooltip/>
        <Pie
          data={data}
          outerRadius={100}
          innerRadius={65}
          dataKey="value"
          label
          
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={index} stroke='transparent' fill={COLORS[index % COLORS.length]}/>
          ))}
        </Pie>
      </PieChartRecharts>
    </ResponsiveContainer>
  )
}

export default PieChart