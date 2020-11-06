import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  background: ${props => props.primary ? 'greenyellow' : 'firebrick'};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Row = styled.div`
  border: 2px solid ${props => props.theme.primaryColor};
`;

const Heading1 = styled.h1`
  color: ${props => props.primary ? 'black' : 'white'};
`;

export function Heading({ children, primary }) {
  return (
    <Container primary={primary}>
      <Row>
        <Heading1 primary={primary}>{children}</Heading1>
      </Row>
    </Container>
  )
}
