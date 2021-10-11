// import './App.css';

import Box from "./Components/Box";
import Simple from "./Components/Simple";

function App() {
  return (
    <>
      <Box boxColor={'white'} ls={'1px'} boxNumber = {{number:1}}/> 
      <Box boxColor={'yellow'} ls={'2px'} boxNumber = {{number:2}} />
      <Box boxColor={'red'} ls={'1.5px'} boxNumber = {{number:3}}/>
    </>
  );
}

export default App;
