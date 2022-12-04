import React from 'react'
import styled from 'styled-components'
import { ScheduleComponent, 
         ViewsDirective, 
         Day,
         Week,
         WorkWeek,
         Month,
         Agenda,
         Inject,
         Resize,
         DragAndDrop} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

const Container = styled.div`
  max-width: ${props => props.theme.mainTheme.maxWidthDashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.mainTheme.sidePaddingDashboard};
  padding-right: ${props => props.theme.mainTheme.sidePaddingDashboard};
`;

const StyledScheduleComponent = styled(ScheduleComponent)`
  &.e-control {
    font-family: 'Inter', sans-serif;
  }

  &.e-control.e-schedule.e-lib.e-keyboard {
    background-color: #ffffff;
    border-radius: 12px;
    border: 2px solid ${props => props.theme.pricingCardBorder};
  }

  &.e-schedule .e-schedule-toolbar .e-toolbar-items {
    background: ${props => props.theme.textPrimary};
  }

  & .e-toolbar .e-tbar-btn {
    background: transparent;
    box-shadow: none;
  }

  & .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
    color:  ${props => props.theme.textSecondary};
  }

  & .e-toolbar .e-tbar-btn.e-btn .e-icons {
    color: ${props => props.theme.textSecondary};
  }

  & .e-tbar-btn:active {
    background-color: transparent;
  }

  &.e-schedule .e-schedule-toolbar .e-active-view .e-tbar-btn-text{
    color: ${props => props.theme.mainTheme.accentColor};
  }
  
  &.e-schedule .e-schedule-toolbar .e-tbar-btn .e-tbar-btn-text {
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
  }

  &.e-schedule .e-schedule-toolbar .e-toolbar-items .e-toolbar-item.e-date-range .e-tbar-btn .e-tbar-btn-text {
    font-size: 0.8rem;
  }

  & .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator {
    border: solid ${props => props.theme.mainTheme.accentColor};
    border-width: 0 2px 0 0;
  }

  &.e-schedule .e-schedule-toolbar .e-toolbar-items.e-tbar-pos {
    min-height: 64px;
    height: 100%;
  }

  & .e-toolbar .e-tbar-btn .e-tbar-btn-text {
    font-family: 'Inter', sans-serif;
  }

  &.e-schedule .e-vertical-view .e-header-cells.e-current-day {
    color: ${props => props.theme.mainTheme.accentColor};
  }

  &.e-schedule .e-vertical-view .e-current-time {
    color: ${props => props.theme.mainTheme.accentColor};
  }

  &.e-schedule .e-vertical-view .e-current-timeline {
    border-top: 2px solid ${props => props.theme.mainTheme.accentColor};
  }

  &.e-schedule .e-vertical-view .e-time-cells-wrap table td, .e-schedule .e-vertical-view .e-work-cells {
    font-size: 0.8rem;
  }

  &.e-schedule .e-vertical-view .e-header-cells .e-header-day {
    font-size: 0.8rem;
  }

  &.e-schedule .e-vertical-view .e-header-cells .e-header-date {
    font-size: 1.25rem;
  }

  &.e-schedule .e-vertical-view .e-time-cells-wrap table td {
    color: ${props => props.theme.textSubtile};
  }
`

const Calendar = () => {
  return (
    <Container>
      <StyledScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
      </StyledScheduleComponent>
    </Container>
  )
}

export default Calendar