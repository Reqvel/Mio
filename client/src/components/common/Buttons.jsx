import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1rem;
    padding: 12px 48px;
    font-weight: 600;
    color: ${props => props.theme.textSecondary};
    background: ${props => props.theme.buttonFilled};
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease; 

    :hover {
        background: ${props => props.theme.buttonFilledHover};
        transition: background 0.3s ease; 
    };
`;

export const ButtonTransparent = styled(Button)`
    color: ${props => props.theme.textPrimary};
    background: transparent;

    :hover {
        background: ${props => props.theme.buttonTransparentHover};
    };
`

const ButtonIconWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    background: transparent;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease; 

    :hover {
        background: ${props => props.theme.buttonTransparentHover};
    };
`

export const ButtonOutlined = styled(ButtonTransparent)`
    border: 2px solid ${props => props.theme.buttonBorder};
`

export const ButtonBig = styled(Button)`
    padding: 20px 64px;
`

const SideMenuBtn = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.64rem;
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
    size: 24px;
`

export const ButtonSideMenu = ({icon, children}) => {
    return (
        <SideMenuBtn>
            <Icon src={icon}/>
            {children}
        </SideMenuBtn>
    )
}

export const ButtonIcon = ({icon, children}) => {
    return (
        <ButtonIconWrapper>
            <Icon src={icon}/>
            {children}
        </ButtonIconWrapper>
    )
}