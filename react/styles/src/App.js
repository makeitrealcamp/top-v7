import { Button } from './components/Button'
import { Paragraph } from './components/Paragraph'
import { Heading } from './components/Heading';
import Alert from 'react-bootstrap/Alert'
import './App.css';
import styled from 'styled-components';

const StyledAlert = styled(Alert)`
  background: greenyellow;
`

const StyledHeading = styled(Alert.Heading)`
  color: black;
`

function App() {
  return (
    <div className="App">
      <Button primary>Crear</Button>
      <Paragraph color="red" primary>lorem ipsum doler sit amet</Paragraph>
      <Heading primary>Hello world</Heading>
      <StyledAlert show variant="warning">
        <StyledHeading>How's it going?!</StyledHeading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
      </StyledAlert>
    </div>
  );
}

export default App;
