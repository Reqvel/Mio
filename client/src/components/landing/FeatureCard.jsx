import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 48px 24px;
  background-color: ${props => props.theme.components.card.featureColor};
  border-radius: 12px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const Icon = styled.img`
    size: 66px;
    padding: 24px;
`;

const Header = styled.h1`
    font-weight: 700;
    font-size: 1.563rem;
    color: ${props => props.theme.textColor.secondary};
    margin: 0;
`;

const Details = styled.p`
    color: ${props => props.theme.textColor.subtile};
    margin: 0;
    text-align: center;
`

const FeatureCard = ({icon, header, details}) => {
  return (
    <Wrapper>
        <Container>
            <Icon src={icon}/>
            <Header>
                {header}
            </Header>
            <Details>
                {details}
            </Details>
        </Container>
    </Wrapper>
  )
};

export default FeatureCard;