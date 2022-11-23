import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  color: ${props => props.theme.textSubtile};
`

const Input = styled.input`
    box-sizing: border-box;
    gap: 8px;
    font-size: 1rem;
    padding: 20px 20px 20px 64px;
    background: transparent;
    border-radius: 12px;
    outline: 2px solid;
    outline-color: transparent;
    border: 2px solid;
    border-color: ${props => props.theme.inputFieldBorderColor};

    background: url(${props => props.icon}) no-repeat left;
    background-size: 24px;
    background-position-x: 20px;
    
    ::placeholder {
        color: ${props => props.theme.textSubtile};
        opacity: 1;
    }

    :focus {
        outline-color: ${props => props.theme.inputFieldOutlineColor};
        border-color: ${props => props.theme.inputFieldOutlineColor};
    }
`

const FormField = ({label, icon, placeholder}) => {
  return (
    <Container>
        <Label>
            {label}
            <Input icon={icon} placeholder={placeholder}/>
        </Label>
    </Container>
  )
}

export default FormField