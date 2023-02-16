import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { useState } from 'react';
import Slidebar from './components/Slidebar/Slidebar';
function App() {
  const [ countt , setCountt ] = useState("20")
  return (
     <div className="App">
        <Slidebar countt={countt} setCountt={setCountt}/>
    </div>    
  );
}

export default App;
