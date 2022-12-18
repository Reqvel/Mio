import React from 'react'
import { BarChart as BarChartRecharts, 
         Bar,
         XAxis, 
         YAxis, 
         CartesianGrid, 
         Tooltip, 
         ResponsiveContainer } from 'recharts';
import { numFormatter ,dateFormatter } from '../../utils/Formatters';

const BarChart = ({data, xKey, yKey, color}) => {
  const isData = (data && xKey && yKey && color)
  return (
    isData &&
      <ResponsiveContainer>
        <BarChartRecharts data={data}
                            margin={{
                              bottom: 24,
                            }}>
          <XAxis tickFormatter={dateFormatter}
                angle={-45}
                textAnchor="end"
                dataKey={xKey} />
          <YAxis tickFormatter={numFormatter} />
          <Tooltip />
          <Bar dataKey={yKey} 
              fill={color}/>
        </BarChartRecharts>
      </ResponsiveContainer>
  )
}

export default BarChart