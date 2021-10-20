// INPUT FORMOS


//  CIA NEKONTROLIUOJAMAS KOMPONENTAS, KA NORIU TA RASAU:

// import TextInput from "./Components/TextInput";

// function App() {

//     return (
//         <div className='sq'>
//             <TextInput />
//         </div>
//     );
// }
// export default App;

// KONTROLIUOJAMAS STEITAS:


import SelectInput from "./Components/SelectInput";
import TextInput from "./Components/TextInput";
import CheckBoxInput from "./Components/CheckBoxInput";

function App() {

    
    return (
        <div>
            <TextInput />
            <SelectInput/>
            <CheckBoxInput/>
        </div>
    );
}
export default App;