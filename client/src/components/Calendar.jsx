import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ScheduleComponent,  
         Day,
         Week,
         WorkWeek,
         Month,
         Agenda,
         Inject,
         Resize,
         DragAndDrop} from '@syncfusion/ej2-react-schedule';
import { useDispatch } from 'react-redux';
import { setHeader } from '../redux/features/dashboardSlice';

const Container = styled.div`
  height: 100%;
  position: relative;
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

const Absolute = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: inherit;
  box-sizing: border-box;
`

const StyledScheduleComponent = styled(ScheduleComponent)`
  &.e-control {
    font-family: 'Inter', sans-serif;
  }

  &.e-control.e-schedule.e-lib.e-keyboard {
    background-color: ${props => props.theme.components.calendar.top.color};
    border-radius: 12px;
    border: 2px solid ${props => props.theme.components.calendar.borderColor};
  }

  &.e-schedule .e-schedule-toolbar .e-toolbar-items {
    background: ${props => props.theme.components.calendar.headerColor};
  }

  & .e-toolbar .e-tbar-btn {
    background: transparent;
    box-shadow: none;

    :active {
      background: transparent;
    }
  }

  & .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
    color:  ${props => props.theme.textColor.secondary};
  }

  & .e-toolbar .e-tbar-btn.e-btn .e-icons {
    color: ${props => props.theme.textColor.secondary};
  }

  & .e-tbar-btn:active {
    background-color: transparent;
  }

  &.e-schedule .e-schedule-toolbar .e-active-view .e-tbar-btn-text{
    color: ${props => props.theme.color.accent};
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
    border: solid ${props => props.theme.color.accent};
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
    color: ${props => props.theme.color.accent};
  }

  &.e-schedule .e-vertical-view .e-current-time {
    color: ${props => props.theme.color.accent};
  }

  &.e-schedule .e-vertical-view .e-current-timeline {
    border-top: 2px solid ${props => props.theme.color.accent};
  }

  &.e-schedule .e-vertical-view .e-time-cells-wrap table td, .e-schedule .e-vertical-view .e-work-cells {
    font-size: 0.8rem;
    font-weight: 500;
  }

  &.e-schedule .e-vertical-view .e-header-cells .e-header-day {
    font-size: 0.8rem;
    font-weight: 500;
  }

  &.e-schedule .e-vertical-view .e-header-cells .e-header-date {
    font-size: 1.25rem;
    font-weight: 600;
  }

  &.e-schedule .e-vertical-view .e-time-cells-wrap table td {
    color: ${props => props.theme.textColor.subtile};
  }

  &.e-schedule .e-vertical-view .e-date-header-wrap table tbody td {
    background-color: ${props => props.theme.components.calendar.top.color};
    border-color: ${props => props.theme.components.calendar.cell.borderColor};
    border-style: solid;
    border-width: 0 0 1px 1px;
    color: ${props => props.theme.textColor.primary};
  }

  &.e-schedule .e-vertical-view .e-left-indent-wrap table tbody td {
    background-color: ${props => props.theme.components.calendar.top.color};
    border-color: ${props => props.theme.components.calendar.top.borderColor};
    border-style: solid;
    border-width: 0 1px 1px 0;
  }

  &.e-schedule .e-vertical-view .e-time-cells-wrap table td {
    background-color: ${props => props.theme.components.calendar.side.color};
    border-color: ${props => props.theme.components.calendar.side.borderColor};
    border-style: solid;
    border-width: 0 1px 1px 0;
    color: ${props => props.theme.textColor.subtile};
  }

  &.e-schedule .e-vertical-view .e-work-cells {
    background-color: ${props => props.theme.components.calendar.cell.color};
    border-color:  ${props => props.theme.components.calendar.cell.borderColor};
    border-style: solid;
    border-width: 0 0 1px 1px;
    padding: 0;
  }

  & .e-calendar, .e-bigger.e-small .e-calendar {
    background-color: ${props => props.theme.backgroundColor.primary};
    border: 2px solid ${props => props.theme.components.calendar.borderColor};
    box-shadow: none;
    border-radius: 12px;
  }

  & .e-calendar .e-footer-container, .e-bigger.e-small .e-calendar .e-footer-container {
    background-color: ${props => props.theme.backgroundColor.primary};
  }

  & .e-day.e-title {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    /* font-size: 1rem; */
    color: ${props => props.theme.textColor.primary}
  }

  & .e-calendar th, .e-bigger.e-small .e-calendar th {
    font-size: 0.8rem;
    font-weight: 500;
    color: ${props => props.theme.textColor.subtile};
  }

  & .e-calendar .e-content span {
    color: ${props => props.theme.textColor.primary};
  }

  & .e-calendar .e-date-icon-prev, 
  .e-calendar .e-date-icon-next, 
  .e-bigger.e-small .e-calendar .e-date-icon-prev, 
  .e-bigger.e-small .e-calendar .e-date-icon-next {
    color: ${props => props.theme.textColor.subtile};
  }

  & .e-content.e-month {
    font-family: 'Inter', sans-serif;
  }

  & .e-btn.e-today.e-flat.e-primary.e-css {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: ${props => props.theme.color.accent};

    :hover {
      background-color: ${props => props.theme.components.button.transparent.hoverColor};
    }

    :focus {
      background-color: ${props => props.theme.components.button.transparent.hoverColor};
    }
  }

  & .e-calendar .e-content td.e-today.e-selected:hover span.e-day,
  .e-calendar .e-content td.e-selected:hover span.e-day, 
  .e-calendar .e-content td.e-selected.e-focused-date span.e-day, 
  .e-bigger.e-small .e-calendar .e-content td.e-today.e-selected:hover span.e-day, 
  .e-bigger.e-small .e-calendar .e-content td.e-selected:hover span.e-day, 
  .e-bigger.e-small .e-calendar .e-content td.e-selected.e-focused-date span.e-day {
    background-color: ${props => props.theme.color.accent};
    color: ${props => props.theme.textColor.secondary};
  }

  & .e-calendar .e-content td.e-today.e-selected span.e-day, .e-bigger.e-small .e-calendar .e-content td.e-today.e-selected span.e-day {
    background-color: ${props => props.theme.color.accent};
    border: 1px solid ${props => props.theme.color.accent};
    box-shadow: inset 0 0 0 2px #fff;
    color: ${props => props.theme.textColor.secondary};
  }

  & .e-calendar .e-content td.e-today span.e-day, 
  .e-calendar .e-content td.e-focused-date.e-today span.e-day, 
  .e-bigger.e-small .e-calendar .e-content td.e-today span.e-day, 
  .e-bigger.e-small .e-calendar .e-content td.e-focused-date.e-today span.e-day {
    background: none;
    border: 1px solid ${props => props.theme.color.accent};
    border-radius: 50%;
    box-shadow: none;
    color: ${props => props.theme.textColor.primary};
  }

  & .e-calendar .e-content span.e-day, 
  .e-bigger.e-small .e-calendar .e-content span.e-day {
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    height: 30px;
    line-height: 30px;
    width: 30px;
  } 

  &.e-schedule .e-vertical-view .e-previous-timeline {
    border-top: 1px dotted ${props => props.theme.color.accent};
  }

  &.e-schedule .e-vertical-view .e-current-time {
    font-size: 0.8rem;
  }

  &.e-schedule .e-month-view .e-date-header-wrap table td {
    background-color: ${props => props.theme.components.calendar.top.color};
    border-color: ${props => props.theme.components.calendar.top.borderColor};
    border-width: 0 0 2px 1px;
    color: ${props => props.theme.textColor.primary};
  }

  &.e-schedule .e-month-view .e-date-header-wrap {
    font-size: 0.8rem;
  }

  &.e-schedule .e-month-view .e-header-cells {
    font-weight: 600;
  }

  &.e-schedule .e-month-view .e-header-cells {
    padding: 12px 3px;
  }

  &.e-schedule .e-month-view .e-other-month, .e-schedule .e-month-agenda-view .e-other-month {
    color: ${props => props.theme.textColor.subtile};
  }

  &.e-schedule .e-month-view .e-content-wrap {
    font-size: 1rem;
  }

  &.e-schedule .e-schedule-table>tbody>tr>td {
    font-weight: 500;
  }

  &.e-schedule .e-month-view .e-work-cells {
    background-color: ${props => props.theme.components.calendar.cell.subtileColor};
    border-color:  ${props => props.theme.components.calendar.cell.borderColor};
    border-style: solid;
    border-width: 0 0 1px 1px;
    color: ${props => props.theme.textColor.primary};
    padding: 0;
  }

  &.e-schedule .e-month-view .e-work-days{
    background-color: ${props => props.theme.components.calendar.cell.color};
  }

  &.e-schedule .e-month-view .e-current-date .e-date-header {
    background-color:  ${props => props.theme.color.accent};
    color: ${props => props.theme.textColor.secondary};
  }

  &.e-schedule .e-agenda-view {
    background-color: ${props => props.theme.components.calendar.cell.color};
  }

  &.e-schedule .e-agenda-view .e-day-border {
    border-bottom: 1px solid ${props => props.theme.components.calendar.cell.borderColor};
  }

  &.e-schedule .e-agenda-view .e-day-date-header .e-m-date {
    font-size: 1.25rem;
    font-weight: 600;
  }

  &.e-schedule .e-agenda-view .e-day-date-header {
    color: ${props => props.theme.textColor.primary};
  }

  &.e-schedule .e-agenda-view .e-day-date-header .e-m-day {
    font-size: 0.8rem;
    font-weight: 500;
  }

  &.e-schedule .e-agenda-view .e-appointment {
    border-left: 3px solid ${props => props.theme.color.accent};
  }

  &.e-schedule .e-agenda-view .e-subject {
    color: ${props => props.theme.textColor.primary};
    font-size: 1rem;
    font-weight: 600;
  }

  &.e-schedule .e-agenda-view .e-date-time {
    color: ${props => props.theme.textColor.subtile};
    font-size: 0.8rem;
    font-weight: 500;
  }

  &.e-schedule .e-vertical-view .e-day-wrapper .e-appointment {
    background: ${props => props.theme.components.calendar.card.color};
    border: 1px solid ${props => props.theme.components.calendar.card.borderColor};
    border-radius: 6px;
    color: ${props => props.theme.textColor.secondary};
  }

  &.e-schedule .e-vertical-view .e-time-cells-wrap table td {
    height: 52px;
  }
  
  &.e-schedule .e-vertical-view .e-work-cells {
    font-size: 12px;
    height: 52px;
    text-align: center;
  }

  &.e-schedule .e-vertical-view .e-day-wrapper .e-appointment .e-subject {
    font-size: 0.8rem;
    font-weight: 700;
  }

  &.e-schedule .e-vertical-view .e-day-wrapper .e-appointment .e-time, 
  &.e-schedule .e-vertical-view .e-day-wrapper .e-appointment .e-location {
    font-size: 0.8rem;
    font-weight: 500;
  }

  & .e-quick-popup-wrapper .e-event-popup .e-popup-header {
    background-color: ${props => props.theme.components.calendar.card.color};
    border-radius: 12px 12px 0 0;
  }

  & .e-quick-popup-wrapper {
    background-color: ${props => props.theme.components.calendar.card.subtileColor};
    border-radius: 12px;
  }

  & .e-quick-popup-wrapper .e-event-popup .e-popup-header .e-header-icon-wrapper .e-edit, .e-quick-popup-wrapper .e-event-popup .e-popup-header .e-header-icon-wrapper .e-delete, .e-quick-popup-wrapper .e-event-popup .e-popup-header .e-header-icon-wrapper .e-close {
    color: ${props => props.theme.textColor.secondary};
  }

  & .e-quick-popup-wrapper .e-event-popup .e-popup-header .e-subject-wrap .e-subject {
    font-size: 1.25rem;
    color: ${props => props.theme.textColor.secondary};
  }

  & .e-quick-popup-wrapper .e-cell-popup .e-date-time-details,
  & .e-quick-popup-wrapper .e-cell-popup .e-location-details,
  & .e-quick-popup-wrapper .e-cell-popup .e-time-zone-details,
  & .e-quick-popup-wrapper .e-cell-popup .e-description-details,
  & .e-quick-popup-wrapper .e-cell-popup .e-resource-details,
  & .e-quick-popup-wrapper .e-event-popup .e-date-time-details,
  & .e-quick-popup-wrapper .e-event-popup .e-location-details,
  & .e-quick-popup-wrapper .e-event-popup .e-time-zone-details,
  & .e-quick-popup-wrapper .e-event-popup .e-description-details,
  & .e-quick-popup-wrapper .e-event-popup .e-resource-details {
    color: ${props => props.theme.textColor.primary};
    font-size: 1rem;
  }

  & .e-quick-popup-wrapper .e-cell-popup .e-date-time-icon, 
  & .e-quick-popup-wrapper .e-cell-popup .e-location-icon, 
  & .e-quick-popup-wrapper .e-cell-popup .e-time-zone-icon, 
  & .e-quick-popup-wrapper .e-cell-popup .e-description-icon,
  & .e-quick-popup-wrapper .e-cell-popup .e-resource-icon,
  & .e-quick-popup-wrapper .e-event-popup .e-date-time-icon, 
  & .e-quick-popup-wrapper .e-event-popup .e-location-icon, 
  & .e-quick-popup-wrapper .e-event-popup .e-time-zone-icon, 
  & .e-quick-popup-wrapper .e-event-popup .e-description-icon, 
  & .e-quick-popup-wrapper .e-event-popup .e-resource-icon{
    color: red;
    font-size: 1.25rem;
    color: ${props => props.theme.textColor.subtile};
  }

  &.e-dialog .e-quick-dialog .e-dlg-header-content {
    border-radius: 12px;
  }

  & .e-quick-popup-wrapper .e-cell-popup .e-popup-header .e-header-icon-wrapper .e-edit,
  & .e-quick-popup-wrapper .e-cell-popup .e-popup-header .e-header-icon-wrapper .e-delete,
  & .e-quick-popup-wrapper .e-cell-popup .e-popup-header .e-header-icon-wrapper .e-close {
    color: ${props => props.theme.textColor.primary};
  }

  & .e-quick-popup-wrapper .e-cell-popup .e-popup-content .e-popup-table .e-subject {
    font-size: 1.25rem;
  }

  & input.e-input,
  & textarea.e-input, 
  & .e-input-group,
  & .e-input-group.e-control-wrapper {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
  }

  & .e-btn.e-flat.e-primary,
  & .e-css.e-btn.e-flat.e-primary {
    color: ${props => props.theme.color.accent};

    :hover {
      background-color: ${props => props.theme.components.button.transparent.hoverColor};
    }

    :focus {
      background-color: ${props => props.theme.components.button.transparent.hoverColor};
    }
  }

  & .e-input-group:not(.e-float-icon-left):not(.e-float-input)::before, 
  & .e-input-group:not(.e-float-icon-left):not(.e-float-input)::after,
  & .e-input-group.e-float-icon-left:not(.e-float-input) .e-input-in-wrap::before,
  & .e-input-group.e-float-icon-left:not(.e-float-input) .e-input-in-wrap::after,
  & .e-input-group.e-control-wrapper:not(.e-float-icon-left):not(.e-float-input)::before,
  & .e-input-group.e-control-wrapper:not(.e-float-icon-left):not(.e-float-input)::after,
  & .e-input-group.e-control-wrapper.e-float-icon-left:not(.e-float-input) .e-input-in-wrap::before,
  & .e-input-group.e-control-wrapper.e-float-icon-left:not(.e-float-input) .e-input-in-wrap::after {
    background: ${props => props.theme.color.accent};
  }

  & .e-input-group input.e-input,
  & .e-input-group.e-control-wrapper input.e-input {
    color: ${props => props.theme.textColor.primary};
  }

  & .e-control,
  & .e-css {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
  }

  & .e-btn.e-flat,
  & .e-css.e-btn.e-flat {
    color: ${props => props.theme.textColor.subtile};
  }

  & input.e-input::selection,
  & textarea.e-input::selection,
  & .e-input-group input.e-input::selection,
  & .e-input-group.e-control-wrapper input.e-input::selection,
  & .e-float-input input::selection,
  & .e-float-input.e-control-wrapper input::selection,
  & .e-input-group textarea.e-input::selection,
  & .e-input-group.e-control-wrapper textarea.e-input::selection,
  & .e-float-input textarea::selection,
  & .e-float-input.e-control-wrapper textarea::selection {
    background: ${props => props.theme.textColor.subtile};
    color: ${props => props.theme.textColor.secondary};
  }

  &.e-schedule .e-agenda-view .e-empty-event {
    color: ${props => props.theme.textColor.subtile};
    font-size: 1rem;
    font-weight: 500;
  }

  &.e-schedule .e-month-view .e-appointment {
    background-color: ${props => props.theme.components.calendar.card.color};
    color: ${props => props.theme.textColor.secondary};
  }

  &.e-schedule .e-month-view .e-appointment .e-appointment-details .e-time {
    font-size: 0.8rem;
  }

  &.e-schedule .e-month-view .e-appointment .e-appointment-details .e-subject {
    font-size: 0.8rem;
  }

  & .e-more-popup-wrapper {
    background-color: ${props => props.theme.components.calendar.top.color};
    border: 2px solid ${props => props.theme.components.calendar.borderColor};
    border-radius: 12px;
    opacity: 1;
    padding: 16px 0;
  }

  &.e-bigger .e-more-popup-wrapper .e-header-day, .e-more-popup-wrapper .e-header-day {
    color: ${props => props.theme.textColor.primary};
    font-size: 0.8rem;
  }

  & .e-more-popup-wrapper .e-header-date {
    color: ${props => props.theme.textColor.primary};
    font-size: 1.25rem;
    font-weight: 600;
  }

  & .e-more-popup-wrapper .e-appointment {
    background-color: ${props => props.theme.components.calendar.card.color};
    color: ${props => props.theme.textColor.secondary};
  }

  & .e-more-popup-wrapper .e-appointment .e-subject {
    color: ${props => props.theme.textColor.secondary};
    font-size: 0.8rem;
  }
`

const Calendar = () => {
  const dispatch = useDispatch()
  const header = 'Calendar'
  const details = "Don't forget to set the details for the calendar!"

  useEffect(() => {
    dispatch(setHeader({header, details}))
  }, [])

  return (
    <Container>
      <Absolute>
        <StyledScheduleComponent
          height='100%'
          width='100%'>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
        </StyledScheduleComponent>
      </Absolute>
    </Container>
  )
}

export default Calendar