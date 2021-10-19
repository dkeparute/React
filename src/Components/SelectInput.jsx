
import { useState } from "react";

function SelectInput() {

const [value, setValue] = useState('');

const change = eventas => {
    setValue(eventas.target.value);
}

    return(
        <div className='sq'>
            <select onChange={change} value={value}>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={4}>Four</option>
            </select>
        </div>
    )
}
export default SelectInput;