import { useContext } from "react";
import { Msg, Msg1 } from '../../AppContext';

function Child() {

    // cia jau yra hookas, turime nurodyti koki konteksta naudojame
    const message = useContext(Msg);
    const message1 = useContext(Msg1);

    return (
        <div className='child'>
            <h1>Child</h1>
            <h2>Got: {message}</h2>
            <h2>Got1: {message1}</h2>
            {/* ne hookine sintakse, o consumerine */}
            <Msg.Consumer>
                {value => <h2>Got MSG: {value}</h2>}
            </Msg.Consumer>
            <Msg1.Consumer>
                {value => <h2>Got MSG1: {value}</h2>}
            </Msg1.Consumer>
        </div>
    );

}
export default Child;