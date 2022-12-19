import React from 'react'
import { LineChart as LineChartRecharts, 
         Line, 
         XAxis, 
         YAxis, 
         Tooltip, 
         ResponsiveContainer } from 'recharts';
import { numFormatter ,dateFormatter } from '../../utils/Formatters';

const LineChart = ({data, xKey, yKey, color}) => {
  const isData = (data && xKey && yKey && color)
  return (
    isData && 
      <ResponsiveContainer>
        <LineChartRecharts data={data}
                            margin={{
                              top: 4,
                              right: 4,
                              bottom: 24,
                            }}>
          <XAxis tickFormatter={dateFormatter}
                  angle={-45}
                  textAnchor="end"
                  dataKey={xKey} />
          <YAxis tickFormatter={numFormatter} />
          <Tooltip />
          <Line type="monotone" 
                dataKey={yKey}
                stroke={color}
                strokeWidth={3}
                activeDot={{ r: 6 }} />
        </LineChartRecharts>
      </ResponsiveContainer>
  )
}

export default LineChart