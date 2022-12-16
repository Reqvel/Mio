import React from 'react'
import styled from 'styled-components'

const SpinnerCotainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`

const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 8px solid ${props => props.theme.components.spinner.backgroundColor};
  border-top: 8px solid ${props => props.theme.components.spinner.foregroundColor};
  border-radius: 60%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoadingSpinner = () => {
  return (
    <SpinnerCotainer>
      <Spinner/>
    </SpinnerCotainer>
  )
}

export default LoadingSpinner