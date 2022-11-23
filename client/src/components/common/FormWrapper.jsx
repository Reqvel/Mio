import styled from 'styled-components';

const Container = styled.div`
  max-height: 864px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormWrapper = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}


export default FormWrapper;