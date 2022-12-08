import React from 'react'
import styled from 'styled-components'

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

const ChartLabelList = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['red', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <List>
      {data.map((entry, index) => (
        <Item key={index}>
          <Color cellColor={COLORS[index % COLORS.length]}/>
          <Value>
            {entry.value}
          </Value>
          <Text>
            {entry.name}
          </Text>
        </Item>
      ))}
    </List>
  )
}

export default ChartLabelList