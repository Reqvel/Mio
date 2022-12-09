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
  color: ${props => props.theme.textColor.subtile};
`

const Input = styled.input`
    box-sizing: border-box;
    gap: 8px;
    font-size: 1rem;
    padding: 20px 20px 20px 64px;
    background: transparent;
    border-radius: 12px;
    outline: 1px solid;
    outline-color: transparent;
    border: 2px solid;
    border-color: ${props => props.theme.components.inputField.borderColor};

    background: url(${props => props.icon}) no-repeat left;
    background-size: 24px;
    background-position-x: 20px;
    
    ::placeholder {
        color: ${props => props.theme.textColor.subtile};
        opacity: 1;
    }

    :focus {
        outline-color: ${props => props.theme.components.inputField.outlineColor};
        border-color: ${props => props.theme.components.inputField.outlineColor};
    }
`

const FormField = ({label, 
                    icon, 
                    placeholder, 
                    refTo, 
                    value, 
                    onChange,
                    disabled,
                    type}) => {
  return (
    <Container>
        <Label>
            {label}
            <Input icon={icon}
                   placeholder={placeholder}
                   ref={refTo}
                   value={value}
                   onChange={onChange}
                   required
                   disabled={disabled}
                   type={type}/>
        </Label>
    </Container>
  )
}

export default FormField