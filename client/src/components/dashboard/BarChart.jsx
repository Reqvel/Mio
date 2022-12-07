import React from 'react'
import { BarChart as BarChartRecharts, 
         Bar,
         XAxis, 
         YAxis, 
         CartesianGrid, 
         Tooltip, 
         ResponsiveContainer } from 'recharts';
import { numFormatter ,dateFormatter } from '../../utils/Formatters';

const BarChart = () => {
  const data = [
    {
      date: '01.01.2000',
      followers: 1345,
    },
    {
      date: '01.02.2000',
      followers: 53453,
    },
    {
      date: '01.03.2000',
      followers: 102348,
    },
    {
      date: '01.03.2000',
      followers: 1002830,
    },
  ];

  return (
    <ResponsiveContainer>
      <BarChartRecharts data={data}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis tickFormatter={dateFormatter}
               dataKey="date" />
        <YAxis tickFormatter={numFormatter} />
        <Tooltip />
        <Bar dataKey="followers" 
             fill="orange"/>
      </BarChartRecharts>
    </ResponsiveContainer>
  )
}

export default BarChart