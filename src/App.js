// import './App.css';

import Box from "./Components/Box";
// import Simple from "./Components/Simple";

const data = [
  {
    ls: '1px',
    boxColor: 'red',
    boxNumber: 10
  },
  {
    ls: '2px',
    boxColor: 'green',
    boxNumber: 9
  },
  {
    ls: '1px',
    boxColor: 'blue',
    boxNumber: 8
  },
  {
    ls: '2px',
    boxColor: 'yellow',
    boxNumber: 7
  }
]

function App() {
  return (
    <>
    {data.map((box, index) => <Box key={index} boxColor={box.boxColor} ls={box.ls} boxNumber = {box.boxNumber}/>  )}
      {/* <Box boxColor={'white'} ls={'1px'} boxNumber = {{number:1}}/> 
      <Box boxColor={'yellow'} ls={'2px'} boxNumber = {{number:2}} />
      <Box boxColor={'red'} ls={'1.5px'} boxNumber = {{number:3}}/> */}
    </>
  );
}

export default App;
