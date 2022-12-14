import React, { useEffect } from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setHeader, setSelectedPage } from '../redux/features/dashboardSlice';
import pagesPaths from '../routes/PagesPaths';

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

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
    font-size: 0.8rem;
    font-weight: 500;
  }

  .e-kanban-table.e-content-table .e-card .e-card-content {
    color: ${props => props.theme.textColor.subtile};
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
`

const Kanban = () => {
  const kanbanGrid = [
    { headerText: 'To Do',
      keyField: 'Open',
      allowToggle: true },
  
    { headerText: 'In Progress',
      keyField: 'InProgress',
      allowToggle: true },
  
    { headerText: 'Testing',
      keyField: 'Testing',
      allowToggle: true,
      isExpanded: false },
  
    { headerText: 'Done',
      keyField: 'Close',
      allowToggle: true },
  ];

  const kanbanData = [
    {
      Id: 'Task 1',
      Title: 'Task - 29001',
      Status: 'Open',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-nancy-davloio',
    },
    {
      Id: 'Task 2',
      Title: 'Task - 29002',
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Type: 'Improvement',
      Priority: 'Normal',
      Tags: 'Improvement',
      Estimate: 6,
      Assignee: 'Andrew Fuller',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-normal, e-andrew-fuller',
    },
    {
      Id: 'Task 3',
      Title: 'Task - 29003',
      Status: 'Open',
      Summary: 'Arrange a web meeting with the customer to get new requirements.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Meeting',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#1F88E5',
      ClassName: 'e-others, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 4',
      Title: 'Task - 29004',
      Status: 'InProgress',
      Summary: 'Fix the issues reported in the IE browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'IE',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 5',
      Title: 'Task - 29005',
      Status: 'Review',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-steven-walker',
    },
    {
      Id: 'Task 6',
      Title: 'Task - 29007',
      Status: 'Validate',
      Summary: 'Validate new requirements',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Robert King',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-robert-king',
    },
    {
      Id: 'Task 7',
      Title: 'Task - 29009',
      Status: 'Review',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
    {
      Id: 'Task 8',
      Title: 'Task - 29010',
      Status: 'Close',
      Summary: 'Test the application in the IE browser.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Review,IE',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 3,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 9',
      Title: 'Task - 29011',
      Status: 'Validate',
      Summary: 'Validate the issues reported by the customer.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Validation,Fix',
      Estimate: 1,
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-steven-walker',
    },
    {
      Id: 'Task 10',
      Title: 'Task - 29015',
      Status: 'Open',
      Summary: 'Show the retrieved data from the server in grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Database,SQL',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 11',
      Title: 'Task - 29016',
      Status: 'InProgress',
      Summary: 'Fix cannot open user’s default database SQL error.',
      Priority: 'Critical',
      Type: 'Bug',
      Tags: 'Database,Sql2008',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 12',
      Title: 'Task - 29017',
      Status: 'Review',
      Summary: 'Fix the issues reported in data binding.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Databinding',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-janet-leverling',
    },
    {
      Id: 'Task 13',
      Title: 'Task - 29018',
      Status: 'Close',
      Summary: 'Analyze SQL server 2008 connection.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Grid,Sql',
      Estimate: 2,
      Assignee: 'Andrew Fuller',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-andrew-fuller',
    },
    {
      Id: 'Task 14',
      Title: 'Task - 29019',
      Status: 'Validate',
      Summary: 'Validate databinding issues.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Margaret hamilt',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 15',
      Title: 'Task - 29020',
      Status: 'Close',
      Summary: 'Analyze grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Analyze',
      Estimate: 2.5,
      Assignee: 'Margaret hamilt',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 16',
      Title: 'Task - 29021',
      Status: 'Close',
      Summary: 'Stored procedure for initial data binding of the grid.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Databinding',
      Estimate: 1.5,
      Assignee: 'Steven walker',
      RankId: 6,
      Color: '#1F88E5',
      ClassName: 'e-others, e-release, e-steven-walker',
    },
    {
      Id: 'Task 17',
      Title: 'Task - 29022',
      Status: 'Close',
      Summary: 'Analyze stored procedures.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Procedures',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 7,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 18',
      Title: 'Task - 29023',
      Status: 'Validate',
      Summary: 'Validate editing issues.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Editing',
      Estimate: 1,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-critical, e-nancy-davloio',
    },
    {
      Id: 'Task 19',
      Title: 'Task - 29024',
      Status: 'Review',
      Summary: 'Test editing functionality.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Editing,Test',
      Estimate: 0.5,
      Assignee: 'Nancy Davloio',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-nancy-davloio',
    },
    {
      Id: 'Task 20',
      Title: 'Task - 29025',
      Status: 'Open',
      Summary: 'Enhance editing functionality.',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Editing',
      Estimate: 3.5,
      Assignee: 'Andrew Fuller',
      RankId: 5,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-andrew-fuller',
    },
    {
      Id: 'Task 21',
      Title: 'Task - 29026',
      Status: 'InProgress',
      Summary: 'Improve the performance of the editing functionality.',
      Type: 'Epic',
      Priority: 'High',
      Tags: 'Performance',
      Estimate: 6,
      Assignee: 'Nancy Davloio',
      RankId: 5,
      Color: '#e91e64',
      ClassName: 'e-epic, e-high, e-nancy-davloio',
    },
    {
      Id: 'Task 22',
      Title: 'Task - 29027',
      Status: 'Open',
      Summary: 'Arrange web meeting with the customer to show editing demo.',
      Type: 'Others',
      Priority: 'High',
      Tags: 'Meeting,Editing',
      Estimate: 5.5,
      Assignee: 'Steven walker',
      RankId: 6,
      Color: '#1F88E5',
      ClassName: 'e-others, e-high, e-steven-walker',
    },
    {
      Id: 'Task 23',
      Title: 'Task - 29029',
      Status: 'Review',
      Summary: 'Fix the editing issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Editing,Fix',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 6,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-janet-leverling',
    },
    {
      Id: 'Task 24',
      Title: 'Task - 29030',
      Status: 'Testing',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-steven-walker',
    },
    {
      Id: 'Task 25',
      Title: 'Task - 29031',
      Status: 'Testing',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
  ];

  const dispatch = useDispatch()
  const header = 'Kanban'
  const details = "Don't forget to set the details for the kanban!"

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedPage(pagesPaths.kanban))
  }, [])

  return (
    <Container>
      <StyledKanbanComponent
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary',
                        headerField: 'Title',
                        selectionType: 'Multiple', }}>
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </StyledKanbanComponent>
    </Container>
  )
}

export default Kanban