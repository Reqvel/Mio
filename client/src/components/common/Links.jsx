import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const LinkButton = styled(Link)`
    font-size: 1rem;
    padding: 12px 48px;
    font-weight: 600;
    color: ${props => props.theme.textSecondary};
    background: ${props => props.theme.buttonFilled};
    border-radius: 12px;
    border: 2px solid transparent;
    text-decoration: none;
    transition: background 0.3s ease; 

    :hover {
        background: ${props => props.theme.buttonFilledHover};
        transition: background 0.3s ease; 
    };
`;

export const LinkButtonTransparent = styled(LinkButton)`
    color: ${props => props.theme.textPrimary};
    background: transparent;

    :hover {
        background: ${props => props.theme.buttonTransparentHover};
    };
`

export const LinkButtonOutlined = styled(LinkButtonTransparent)`
    border: 2px solid ${props => props.theme.buttonBorder};
`

export const LinkButtonBig = styled(LinkButton)`
    padding: 20px 64px;
`