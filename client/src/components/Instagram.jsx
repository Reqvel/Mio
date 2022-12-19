import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeader, setSelectedPage } from '../redux/features/dashboardSlice'
import ConnectSocial from './dashboard/ConnectSocial'
import styled from 'styled-components'
import pagesPaths from '../routes/PagesPaths'

const Container = styled.div`
  height: 100%;
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

const Instagram = () => {
  const dispatch = useDispatch()
  const header = 'Instagram'
  const details = "Instagram stats support coming soon!"

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedPage(pagesPaths.instagram))
  }, [])

  return (
    <Container>
      <ConnectSocial socialName={header}/>
    </Container>
  )
}

export default Instagram