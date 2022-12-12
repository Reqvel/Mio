import React from 'react'
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import { useSelector } from 'react-redux';
import LightCalendarIcon from '../../svgs/light/feature/Calendar.svg'
import LightStatisticsIcon from '../../svgs/light/feature/Statistics.svg'
import LightKanbanIcon from '../../svgs/light/feature/Kanban.svg'
import DarkCalendarIcon from '../../svgs/dark/feature/Calendar.svg'
import DarkStatisticsIcon from '../../svgs/dark/feature/Statistics.svg'
import DarkKanbanIcon from '../../svgs/dark/feature/Kanban.svg'

const Wrapper = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: ${props => props.theme.backgroundColor.primary};
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.landing};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.landing};
  padding-right: ${props => props.theme.padding.landing};
`;

const Cards = styled.div`
    display: flex;
    gap: ${props => props.theme.gap.cards.landing};
`;

const Features = () => {
  const { isThemeDark } = useSelector(state => state.app)

  return (
    <Wrapper id='features'>
        <Container>
            <Cards>
                <FeatureCard icon={ isThemeDark
                                      ? DarkCalendarIcon
                                      : LightCalendarIcon}
                             header='Calendar'
                             details='Illuminate business-critical insights by tapping into the world’s largest and most transparent focus group: social media.'/>
                <FeatureCard icon={ isThemeDark
                                      ? DarkStatisticsIcon
                                      : LightStatisticsIcon}
                             header='Statistics'
                             details='Illuminate business-critical insights by tapping into the world’s largest and most transparent focus group: social media.'/>
                <FeatureCard icon={ isThemeDark
                                      ? DarkKanbanIcon
                                      : LightKanbanIcon}
                             header='Kanban'
                             details='Illuminate business-critical insights by tapping into the world’s largest and most transparent focus group: social media.'/>
            </Cards>
        </Container>
    </Wrapper>
  )
}

export default Features