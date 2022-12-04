import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
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

const LinkSideMenu = styled(StyledLink)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.694rem;
    padding: 16px 8px;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease 0s; 

    :hover {
        background: ${props => props.theme.buttonTransparentHover};
        transition: background 0.3s ease 0s; 
    };

    ::after {
        position: absolute;
        content: '';
        height: 0;
        left: 0;
        border-left: 3px solid;
        border-left-color: transparent;

        transition: height 0.3s ease 0s, 
                    border-left-color 0.3s ease 0s;
    }

    :hover::after {
        position: absolute;
        content: '';
        height: 100%;
        border-left: 3px solid;
        border-left-color: ${props => props.theme.mainTheme.accentColor};

        transition: height 0.3s ease 0s, 
                    border-left-color 0.3s ease 0s;
    }
`

const Icon = styled.img`
    height: auto;
    width: 24px;
`

export const LinkButtonSideMenu = ({to, icon, children}) => {
    return (
        <LinkSideMenu to={to}>
            <Icon src={icon}/>
            {children}
        </LinkSideMenu>
    )
}