
function Edit({ plate, del }) {

    const handleDelete = () => {
        del(plate.id);
    }

    return (
        <div className='domino_edit' >
            <div>
                <input value={plate.left}></input>
                <input value={plate.right}></input>
            </div>
            <div className='domino_buttons'>
                <div className='domino_buttons_ok'>✅ </div>
                <div className='domino_buttons_delete' onClick={handleDelete}>❌</div>
            </div>

        </div>
    );
}
export default Edit;