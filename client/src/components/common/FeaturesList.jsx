import React from 'react'
import CheckMarkIcon from '../../svgs/icons/CheckMark.svg'
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
  return (
    <>
      <ListHeader>
        {header} includes:
      </ListHeader>
      <List>
        { features.map((feature,index) => (
          <ListItem key={index}>
            <Icon src={CheckMarkIcon}/>
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