import { useContext } from "react";
import {Msg} from '../../App';

function Child() {

    // cia jau yra hookas, turime nurodyti koki konteksta naudojame
    const message = useContext(Msg);

    return (
      <div className='child'>
          <h1>Child</h1>
          <h2>Got: {message}</h2>
      </div>
    );

}
export default Child;