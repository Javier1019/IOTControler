import React from 'react';
import './App.css';
import DeviceList from './components/DeviceList';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="App">
      <DeviceList />
    </Container>
  );
}

export default App;
