// I VARIANTAS
// import { useState } from "react";
// import ButtonColorChanger from "./Components/ButtonColorChanger";

// function App() {

//     const [bg, setBg] = useState('black');

//     const changeBg = () => {
//         setBg('#' + Math.floor(Math.random() * 16777215).toString(16));
//     }


//     return (
//         <>
//             <div className='sq' style={{ backgroundColor: bg }}></div>
//             <ButtonColorChanger kasNors={changeBg} />
//         </>
//     );
// }
// export default App;

// II VARIANTAS

import { useState } from "react";
import ButtonColorChanger from "./Components/ButtonColorChanger";

function App() {

    const [bg, setBg] = useState('black');

    // kaip argumenta priims COLOR ir setins tokia spalva, kokia gavo
    const changeBg = color => {
        setBg(color);
    }


    return (
        <>
            <div className='sq' style={{ backgroundColor: bg }}></div>
            <ButtonColorChanger kasNors={changeBg} />
        </>
    );
}
export default App;