import React, { useEffect } from 'react'
import { setHeader, setSelectedOption } from '../../redux/features/settingsSlice';
import ToggleSwitch from '../common/ToggleSwitch';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setIsThemeDark } from '../../redux/features/appSlice';
import pagesPaths from '../../routes/PagesPaths';

const Container = styled.div`
  width: 512px;
  display: flex;
  justify-content: space-between;
`

const Theme = styled.span`
  color: ${props => props.theme.textColor.primary};
  padding-right: 8px;
`

const Appearance = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const header = "Appearance"
  const details = "Change the App's appearance"
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedOption(pagesPaths.settings.appearance))
  }, [dispatch])

  const handleClick = () => {
    dispatch(setIsThemeDark(!isThemeDark))
  }

  return (
    <Container>
      <Theme>
        Dark mode
      </Theme>
      <ToggleSwitch checked={isThemeDark}
                    onChange={handleClick}/>
    </Container>
  )
}

export default Appearance