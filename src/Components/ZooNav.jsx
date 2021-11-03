function ZooNav({ types, filter }) {

    return (
        <div className='zoo__nav'>
            <div className='zoo__nav__filter'>
                <span>Amimal filter by type: </span>
                <select >
                    <option value="">Select animal </option>
                    {types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)}

                </select>
            </div>
        </div>
    );
}
export default ZooNav;