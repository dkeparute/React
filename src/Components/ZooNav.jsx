import { useState } from "react";

function ZooNav({ types, filter, reset, search, sort }) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

    const handleSearchValue = e => {
        console.log(e)
        setSearchValue(e.target.value);
        search(e.target.value)
    }

    const resetHandler = () => {
        reset();
        setFilterValue('');
    }

    const selectSort = e => {
        setSortValue(e.target.value);
        sort(e.target.value);
    }

    return (
        <div className="zoo__nav">
            <div className="zoo__nav__filter">
                <span>Item sort </span>
                <select onChange={selectSort} value={sortValue}>
                    <option value="">Select item</option>
                    <option value="">By name AZ</option>
                    <option value="">By name ZA</option>
                    <option value="name_asc">By weight asc</option>
                    <option value="name_desc">By weight desc</option>

                </select>
            </div>
            <div className="zoo__nav__filter">
                <span>Animal Filter by type</span>
                <select onChange={selectFilter} value={filterValue}>
                    <option value="">Select animal</option>
                    {
                        types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)
                    }
                </select>
            </div>
            <div className="zoo__nav__filter">
                <span>Animal Search by name</span>
                <input onChange={handleSearchValue} value={searchValue}></input>
            </div>
            <div className="zoo__nav__reset">
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default ZooNav;