// VISI INPUTAI TURI BUTI UZDAROMI

import { useState } from "react";

//  CIA NEKONTROLIUOJAMAS KOMPONENTAS, KA NORIU TA RASAU:

// function TextInput() {

//     return(
//         <div>
//             <input type="text" />
//         </div>
//     )
// }
// export default TextInput;


// KONTROLIUOJAMAS KOMPONENTAS:

function TextInput() {

    const [value, setValue] = useState('');
    const [tvalue, setTvalue] = useState('');

    // gaus argumentu eventa
    const change = eventas => {
        // console.log('fbdf', eventas.target.value);
        setValue(eventas.target.value);
    }

    // gaus argumentu eventa
    const tchange = eventas => {
        setTvalue(eventas.target.value);
    }



    return (
        <div className='sq'>
            <input onChange={change} type="text" value={value} />
            <textarea onChange={tchange} value={tvalue}></textarea>
        </div>
    )
}
export default TextInput;