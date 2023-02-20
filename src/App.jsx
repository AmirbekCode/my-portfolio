import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { useState } from 'react';
import Slidebar from './components/Slidebar/Slidebar';
import Main from './components/Main/Main';
import Bar from './components/RightBar/Bar';

function App() {

  return (
     <div className="App">
        <Slidebar/>
        <Main/>
        <Bar/>      

    </div>    
  );
}

export default App;



