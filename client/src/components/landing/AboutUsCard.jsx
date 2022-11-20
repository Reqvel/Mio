import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const Icon = styled.div`
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    font-weight: 700;
    font-size: 1.563rem;
    color: ${props => props.headerColor};
    margin: 0;
`;

const Details = styled.p`
    color: ${props => props.detailsColor};
    margin: 0;
`

const AboutUsCard = ({info, headerColor, detailsColor}) => {
  return (
    <Container>
        <Icon>
            {info.icon}
        </Icon>
        <Header headerColor={headerColor}>
            {info.header}
        </Header>
        <Details detailsColor={detailsColor}>
            {info.details}
        </Details>
    </Container>
  )
};

export default AboutUsCard;