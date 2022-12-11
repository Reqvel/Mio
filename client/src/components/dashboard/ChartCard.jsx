import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: ${props => props.minWidth};;
  grid-column-start: ${props => props.columnStart};
  grid-column-end: ${props => props.columnEnd};
  grid-row-start: ${props => props.rowStart};
  grid-row-end: ${props => props.rowEnd};
  padding: 24px;
  border: 2px solid ${props => props.theme.components.card.dashboard.borderColor};
  border-radius: 12px;
  background-color: ${props => props.theme.components.card.dashboard.color};
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.span`
  font-size: 1.563rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 6px;
`

const Details = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 16px;
`

const ChartContainer = styled.div`
  flex: 1;
  min-height: 350px;
  position: relative;
`

const Chart = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Bottom = styled.div`
`

const LineChartCard = ({ header, details, chart, bottom,
                         minWidth,
                         columnStart, columnEnd, rowStart, rowEnd}) => {
  
  return (
    <Wrapper minWidth={minWidth}
             columnStart={columnStart}
             columnEnd={columnEnd}
             rowStart={rowStart}
             rowEnd={rowEnd}>
      <Container>
        <Header>
          Followers Growth
        </Header>
        <Details>
          Understand how the followers count for @khaby.lame's TikTok profile is progressing through each day.
        </Details>
        <ChartContainer>
          <Chart>
            {chart}
          </Chart>
        </ChartContainer>
        <Bottom>
          {bottom}
        </Bottom>
      </Container>
    </Wrapper>
  )
}

export default LineChartCard