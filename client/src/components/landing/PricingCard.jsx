import React from 'react'
import styled from 'styled-components'
import { ButtonBig } from '../common/Buttons';
import CheckMarkIcon from '../../svgs/icons/CheckMark.svg'

const Wrapper = styled.div`
  width: 100%;
  background-color: transparent;
  border: 2px solid ${props => props.theme.pricingCardBorder};
  border-radius: 12px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Upper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding-top: 80px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 40px;
    border-bottom: 2px solid ${props => props.theme.components.card.pricing.borderColor};
`

const Header = styled.span`
    font-size: 1.953rem;
    font-weight: 700;
    color: ${props => props.theme.textColor.primary};
    margin-bottom: 16px;
`

const Annually = styled.span`
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 4px;
`

const Monthly = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 16px;
`

const Lower = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 24px;
`

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
    text-decoration-thickness: 2px;
`

const PricingCard = () => {
  return (
    <Wrapper>
        <Container>
            <Upper>
                <Header>
                    Standart
                </Header>
                <Annually>
                    $89 per user/month (billed annually)
                </Annually>
                <Monthly>
                    or $99 month-to-month
                </Monthly>
                <ButtonBig>
                    Start Free Trial
                </ButtonBig>
            </Upper>
            <Lower>
                <ListHeader>
                    Standart includes:
                </ListHeader>
                <List>
                    <ListItem>
                        <Icon src={CheckMarkIcon}/>
                        <Feature>
                            Feature
                        </Feature>
                    </ListItem>
                    <ListItem>
                        <Icon src={CheckMarkIcon}/>
                        <Feature>
                            Feature
                        </Feature>
                    </ListItem>
                    <ListItem>
                        <Icon src={CheckMarkIcon}/>
                        <Feature>
                            Feature
                        </Feature>
                    </ListItem>
                    <ListItem>
                        <Icon src={CheckMarkIcon}/>
                        <Feature>
                            Feature
                        </Feature>
                    </ListItem>
                    <ListItem>
                        <Icon src={CheckMarkIcon}/>
                        <Feature>
                            Feature
                        </Feature>
                    </ListItem>
                    <ListItem>
                        <Icon src={CheckMarkIcon}/>
                        <Feature>
                            Feature
                        </Feature>
                    </ListItem>
                    <ListItem>
                        <Icon src={CheckMarkIcon}/>
                        <Feature>
                            Feature
                        </Feature>
                    </ListItem>
                </List>
            </Lower>
        </Container>
    </Wrapper>
  )
}

export default PricingCard