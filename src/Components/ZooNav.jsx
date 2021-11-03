import { useState } from "react";

function ZooNav({ types, filter, reset }) {

    const [filterValue, setFilterValue] = useState(' ');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value);
}

const resetHandler = () => {
    reset();
}

    return (
        <div className='zoo__nav'>
            <div className='zoo__nav__filter'>
                <span>Amimal filter by type: </span>
                <select onChange={selectFilter} value={filter}>
                    <option value="">Select animal </option>
                    {types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)}

                </select>
            </div>
            <div className='zoo__nav__reset'>
                <button onClick={resetHandler}>Reset</button>
        </div>
        </div>
    );
}
export default ZooNav;