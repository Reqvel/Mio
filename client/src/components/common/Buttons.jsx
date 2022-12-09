import styled from 'styled-components';

export const Button = styled.button`
    padding: 12px 48px;
    font-weight: 600;
    color: ${props => props.theme.textColor.secondary};
    background: ${props => props.disabled
                            ? props.theme.components.button.filled.disabledColor
                            : props.theme.components.button.filled.color};
    border-radius: 12px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: background 0.3s ease; 

    :hover {
        background: ${props => props.disabled
                            ? props.theme.components.button.filled.disabledColor
                            : props.theme.components.button.filled.hoverColor};
        transition: background 0.3s ease; 
    };
`;

export const ButtonTransparent = styled(Button)`
    color: ${props => props.theme.textColor.primary};
    background: transparent;

    :hover {
        background: ${props => props.theme.components.button.transparent.hoverColor};
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
    border: 2px solid transparent;
    cursor: pointer;
    transition: background 0.3s ease; 

    :hover {
        background: ${props => props.theme.components.button.transparent.hoverColor};
    };
`

export const ButtonOutlined = styled(ButtonTransparent)`
    border: 2px solid ${props => props.theme.components.button.outlined.borderColor};
`

export const ButtonBig = styled(Button)`
    padding: 20px 64px;
`

const Icon = styled.img`
    height: auto;
    width: 24px;
`

export const ButtonIcon = ({icon, children}) => {
    return (
        <ButtonIconWrapper>
            <Icon src={icon}/>
            {children}
        </ButtonIconWrapper>
    )
}