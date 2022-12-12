import React from 'react'
import LightCheckMarkIcon from '../../svgs/light/icons/CheckMark.svg'
import DarkCheckMarkIcon from '../../svgs/dark/icons/CheckMark.svg'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const ListHeader = styled.span`
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 20px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ListItem = styled.div`
  display: flex;
  gap: 16px;
`

const Icon = styled.img`
  size: 24px;
`

const Feature = styled.span`
  color: ${props => props.theme.textColor.primary};
  text-decoration: underline;
`

const FeaturesList = ({header, features}) => {
  const { isThemeDark } = useSelector(state => state.app)

  return (
    <>
      <ListHeader>
        {header} includes:
      </ListHeader>
      <List>
        { features.map((feature,index) => (
          <ListItem key={index}>
            <Icon src={ isThemeDark
                          ? DarkCheckMarkIcon
                          : LightCheckMarkIcon}/>
              <Feature>
                {feature}
              </Feature>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default FeaturesList