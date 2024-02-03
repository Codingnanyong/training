import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const SimpleButton = styled.button`
  color : white;
  background-color : green;
`;

const LargeButton = styled(SimpleButton)`
  font-size : 50px;
`;

const ReactButton = props =>{
  return <button className='{props.className}'>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size : 50px;
`;

const PrimaryButton = styled.button`
  color : ${props => props.primary ? 'white' : 'black'};
  background-color : ${props => props.primary ? 'blue' : 'gray'}
`;

function App() {
  return (
    <div>
      <SimpleButton>SimpleButton</SimpleButton>
      <LargeButton>LargeButton</LargeButton>
      <ReactButton>ReactButton</ReactButton>
      <ReactLargeButton>ReactLargeButton</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}

export default App;
