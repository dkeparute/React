import { useContext } from "react";

function Child() {

    // cia jau yra hookas, turime nurodyti koki konteksta naudojame
    const message = useContext()

    return (
      <div className='child'>
          <h1>Child</h1>
          <h2>Got: </h2>
      </div>
    );

}
export default Child;