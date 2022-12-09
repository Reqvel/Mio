import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeader } from '../redux/features/dashboardSlice'
import ConnectSocial from './ConnectSocial'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

const YouTube = () => {
  const dispatch = useDispatch()
  const header = 'YouTube'
  const details = "Don't forget to set the details for the YouTube!"

  useEffect(() => {
    dispatch(setHeader({header, details}))
  }, [])

  return (
    <Container>
      <ConnectSocial socialName={header}/>
    </Container>
  )
}

export default YouTube