import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeader } from '../redux/features/dashboardSlice'
import styled from 'styled-components'
import OptionsMenu from './settings/OptionsMenu'
import Option from './settings/Option'

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
  height: 100%;
`;

const Cards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.gap.cards.dashboard};
`

const Settings = () => {
  const dispatch = useDispatch()
  const header = 'Settings'
  const details = "Don't forget to set the details for the Settings!"

  useEffect(() => {
    dispatch(setHeader({header, details}))
  }, [])

  return (
    <Container>
      <Cards>
        <OptionsMenu/>
        <Option/> {/* <-- Outlet inside */}
      </Cards>
    </Container>
  )
}

export default Settings