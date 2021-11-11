import { createContext, useState } from "react";
import GranPa from "./Components/Context/GranPa";
export const Msg = createContext('');
export const Msg1 = createContext('');

function App() {

    const [message, setMessage] = useState('No message');
    const [message1, setMessage1] = useState('No message1');
    const [messageToChild, setMessageToChild] = useState('');
    const [messageToChild1, setMessageToChild1] = useState('');

    const messageControl = event => {
        setMessage(event.target.value);
    }

    const messageControl1 = event => {
        setMessage1(event.target.value);
    }


    const sender = () => {
        setMessageToChild(message);
        setMessageToChild1(message);
    }


    return (
        <div className="context">
            <h1>APP</h1>
            <input type="text" onChange={messageControl} value={message}></input>
            <input type="text" onChange={messageControl1} value={message1}></input>
            <button onClick={sender}>APP message</button>
            <Msg.Provider value={messageToChild}>
                <Msg1.Provider value={messageToChild1}>
                <GranPa/>
            </Msg1.Provider>
        </Msg.Provider>
        </div >

    );

}
export default App;
