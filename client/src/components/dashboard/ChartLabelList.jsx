import React from 'react'
import styled from 'styled-components'
import { colorArray } from './PieChart'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
`

const Color = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => props.cellColor};
  border-radius: 4px;
`

const Value = styled.span`
  font-weight: 600;
  flex: 1;
  color: ${props => props.theme.textColor.primary};
`

const Text = styled.span`
  flex: 2;
  color: ${props => props.theme.textColor.subtile};
  text-align: end;
`

const ChartLabelList = ({data, valueKey, nameKey}) => {
  const isData = (data && valueKey && nameKey)

  return (
    isData && 
      <List>
        {data.map((entry, index) => (
          <Item key={index}>
            <Color cellColor={colorArray[index % colorArray.length]}/>
            <Value>
              {entry[valueKey]}
            </Value>
            <Text>
              {entry[nameKey]}
            </Text>
          </Item>
        ))}
      </List>
  )
}

export default ChartLabelList