
function Edit({ plate }) {

    return (
        <div className='domino_edit' >
            <input value={plate.left}></input>
            <input value={plate.right}></input>
            <div className='domino_edit_ok'>✅ </div>
        </div>
    );
}
export default Edit;