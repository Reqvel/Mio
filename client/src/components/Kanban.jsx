import React, { useEffect } from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setHeader, setSelectedPage } from '../redux/features/dashboardSlice';
import pagesPaths from '../routes/PagesPaths';
import { useState } from 'react';
import { useRef } from 'react';
import { useGetKanbanCategoriesQuery,
         useGetKanbanEventsQuery,
         useLazyGetKanbanEventsQuery,
         useSendChangedKanbanEventsMutation,
         useSendCreatedKanbanEventsMutation,
         useSendRemovedKanbanEventsMutation } from '../redux/features/kanbanApiSlice';
import LoadingSpinner from './common/LoadingSpinner'
import { QueryStatus } from '@reduxjs/toolkit/dist/query';
import { useCallback } from 'react';

const Container = styled.div`
  height: 100%;
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledKanbanComponent = styled(KanbanComponent)`
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  .e-kanban-table .e-header-cells {
    background-color: ${props => props.theme.components.kanban.card.headerColor};
  }

  .e-kanban-header .e-header-cells.e-collapsed {
    background-color: ${props => props.theme.components.kanban.card.headerColor};
  }

  .e-kanban-content .e-content-row .e-content-cells.e-collapsed .e-collapse-header-text{
    color: ${props => props.theme.textColor.primary};
  }

  .e-kanban-table .e-header-cells .e-column-expand {
    color: ${props => props.theme.textColor.secondary};
  }

  .e-kanban-table .e-header-cells .e-column-collapse {
    color: ${props => props.theme.textColor.secondary};
  }

  .e-header-title {
    font-family: 'Inter', sans-serif;
  }

  .e-kanban-table .e-header-cells .e-header-text {
    color: ${props => props.theme.textColor.secondary};
    font-size: 1rem;
    font-weight: 600;
  }

  .e-kanban-table .e-header-cells .e-item-count {
    display: flex;
    align-items: center;
    color: ${props => props.theme.textColor.secondary};
    font-size: 0.8rem;
    font-weight: 500;
  }

  .e-kanban-header .e-header-cells {
    border-radius: 12px 12px 0 0;
    padding: 12px 12px;
  }

  .e-kanban-content .e-content-row:not(.e-swimlane-row) .e-content-cells {
    border: 2px solid ${props => props.theme.components.kanban.card.borderColor};
    border-radius: 0 0 12px 12px;
    vertical-align: top;
  }

  .e-card {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.components.kanban.card.cellColor};
  }

  .e-kanban-content .e-content-row .e-content-cells.e-collapsed .e-collapse-header-text {
    color: ${props => props.theme.textColor.primary};
    font-size: 1rem;
    font-weight: 500;
  }

  .e-kanban-table.e-content-table .e-content-row:not(.e-swimlane-row) td {
    background-color: ${props => props.theme.components.kanban.card.color};
  }

  .e-kanban-content .e-content-row .e-content-cells .e-card-wrapper .e-card .e-card-header .e-card-header-title {
    font-size: 1rem;
    font-weight: 500;
  }
  
  .e-card .e-card-header-caption .e-card-header-title {
    color: ${props => props.theme.textColor.primary};
  }

  .e-kanban-content .e-content-row .e-content-cells .e-card-wrapper .e-card .e-card-content {
    font-size: 1rem;
    font-weight: 500;
  }

  .e-kanban-table.e-content-table .e-card .e-card-content {
    color: ${props => props.theme.textColor.primary};
  }

  .e-card.e-droppable.e-lib.e-draggable.e-selection {
    background-color: ${props => props.theme.components.kanban.card.selectionColor};
  }

  &.e-kanban .e-kanban-content .e-content-row .e-content-cells .e-card-wrapper .e-empty-card, 
  &.e-kanban .e-kanban-content .e-content-row .e-content-cells .e-card-container .e-empty-card {
    color: ${props => props.theme.textColor.primary};
    font-size: 0.8rem;
    font-weight: 500;
  }

  &.e-kanban .e-kanban-table.e-content-table .e-content-row .e-show-add-button .e-show-add-icon {
    color: ${props => props.theme.textColor.primary};
  }

  &.e-kanban .e-kanban-content .e-content-row .e-content-cells .e-show-add-button {
    border-radius: 4px;
    border: 2px dashed ${props => props.theme.components.kanban.card.borderColor};

    :hover {
      background-color: ${props => props.theme.components.button.transparent.hoverColor};
    }
  }
`

const Kanban = () => {
  const [cells, setCells] = useState([])
  const [categories, setCategories] = useState([])
  
  const kanbanRef = useRef()
  const dispatch = useDispatch()
  const header = 'Kanban'
  const details = "Don't forget to set the details for the kanban!"

  const {data: categoriesResponse, isFetching: isCategoriesFetching} = useGetKanbanCategoriesQuery()
  const {data: cellsResponse, isFetching: isCellsFetching} = useGetKanbanEventsQuery()
  const [getEvents] = useLazyGetKanbanEventsQuery()
  const [sendChangedEvents] = useSendChangedKanbanEventsMutation()
  const [sendCreatedEvents, {status: createdStatus}] = useSendCreatedKanbanEventsMutation()
  const [sendRemovedEvents] = useSendRemovedKanbanEventsMutation()

  const handleDataChanged = useCallback((e) => {
    const handleChanged = (records) => sendChangedEvents(records)
    const handleCreated = (records) => sendCreatedEvents(records) 
    const handleRemoved = (records) => sendRemovedEvents(records) 

    switch(e.requestType) {
      case 'cardChanged':
        handleChanged(Object.values(e.changedRecords))
        break;
      case 'cardCreated':
        handleCreated(Object.values(e.addedRecords))
        break;
      case 'cardRemoved':
        handleRemoved(Object.values(e.deletedRecords))
        break;
      default: break;
    }
  }, [sendChangedEvents, sendCreatedEvents, sendRemovedEvents])

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedPage(pagesPaths.kanban))
  }, [dispatch])

  useEffect(() => {
    if(!isCategoriesFetching) {
      if(categoriesResponse) {
        setCategories(JSON.parse(JSON.stringify(categoriesResponse)))
      }
    }

    if(!isCellsFetching) {
      if(cellsResponse) {
        setCells(JSON.parse(JSON.stringify(cellsResponse)))
      }
    }

    if(!isCellsFetching && !isCategoriesFetching) {
      kanbanRef.current?.addEventListener('dataSourceChanged', handleDataChanged)
    }
  }, [isCellsFetching, isCategoriesFetching, cellsResponse, categoriesResponse, handleDataChanged])

  useEffect(() => {
    if(createdStatus === QueryStatus.fulfilled) {
      const {data} = getEvents()

      if(data) {
        setCells(JSON.parse(JSON.stringify(data)))
      }
    }
  }, [createdStatus, getEvents])

  return (
    <Container>
      {
        (isCellsFetching || isCategoriesFetching)
        ? <SpinnerContainer>
            <LoadingSpinner/>
          </SpinnerContainer>
        : <StyledKanbanComponent
            ref={kanbanRef}
            keyField="category"
            showEmptyColumn={true}
            dataSource={cells}
            dialogSettings={{
              fields: [
                { text:'Category', key: 'category', type: 'DropDown' },
                { text:'Description', key: 'description', type: 'TextArea' }
              ]
            }}
            cardSettings={{ showHeader: false,
                            headerField: 'id',
                            contentField: 'description',
                            selectionType: 'Multiple', }}>
            <ColumnsDirective>
              {categories.map((category, index) => (
                <ColumnDirective key={index}
                                 headerText={category.name}
                                 keyField={category.name}
                                 allowToggle={true}
                                 showAddButton={true} />))}
            </ColumnsDirective>
          </StyledKanbanComponent>
      }
    </Container>
  )
}

export default Kanban