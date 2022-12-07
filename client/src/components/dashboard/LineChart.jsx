import React from 'react'
import { LineChart as LineChartRecharts, 
         Line, 
         XAxis, 
         YAxis, 
         CartesianGrid, 
         Tooltip, 
         ResponsiveContainer } from 'recharts';
import { numFormatter ,dateFormatter } from '../../utils/Formatters';

const LineChart = () => {
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
      <LineChartRecharts data={data}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis tickFormatter={dateFormatter} 
                dataKey="date" />
        <YAxis tickFormatter={numFormatter} />
        <Tooltip />
        <Line type="monotone" 
              dataKey="followers" 
              stroke="orange"
              strokeWidth={3}
              activeDot={{ r: 6 }} />
      </LineChartRecharts>
    </ResponsiveContainer>
  )
}

export default LineChart