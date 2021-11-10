import { createContext, useState } from "react";
import GranPa from "./Components/Context/GranPa";
export const Msg = createContext('');

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
            {/* konteksto provideris turi value tai jo propras */}
            <Msg.Provider value={messageToChild}>
                <GranPa />
            </Msg.Provider>
        </div>
    );

}
export default App;