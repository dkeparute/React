import { useState } from "react";
import GranPa from "./Components/Context/GranPa";

function App() {

    const [message, setMessage] = useState('No message');
    const [messageToChild, setMessageToChild] = useState('');

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
            <GranPa messageToChild={messageToChild}/>
        </div>
    );

}
export default App;