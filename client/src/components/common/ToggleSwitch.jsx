import React from 'react'
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background: ${props => props.theme.textColor.secondary};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${props => props.theme.textColor.primary};
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 12px;
  width: 48px;
  height: 24px;
  margin: 0;
  &:checked + ${CheckBoxLabel} {
    background: ${props => props.showToggle
                            ? '#4fbe79' 
                            : props.theme.textColor.secondary};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 26px;
      transition: 0.2s;
    }
  }
`;

function ToggleSwitch({checked, showToggle=true, onChange}) {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox"
                type="checkbox"
                checked={checked}
                showToggle={showToggle} 
                onChange={onChange}/>
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  )
}

export default ToggleSwitch