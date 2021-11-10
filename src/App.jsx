import { createContext, useState } from "react";
import GranPa from "./Components/Context/GranPa";

function App() {

    const [message, setMessage] = useState('No message');
    const [messageToChild, setMessageToChild] = useState('');

    // tai yra komponentas del to is didziosios raides, tai NERA HOKAS
    // cia sukuriam kontektsa kad butu galima panaudoti
    const Context = createContext('');


    const messageControl = event => {
        setMessage(event.target.value);
    }

    const sender = () => {
        setMessageToChild(message);
    }

    return (
        <div className='context'>
            <h1>App</h1>
            <input type="text" onChange={messageControl} value={message}></input>
            <button onClick={sender}>App message</button>
            {/* konteksto provideris turi value tai jo propras */}
            <Context.Provider value={messageToChild}>
            <GranPa />
            </Context.Provider>
        </div>
    );

}
export default App;