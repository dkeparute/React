
function Edit({ plate, del , change, save}) {

    const handleDelete = () => {
        del(plate.id);
    }

    const handleInputs = (e, p) => {
        change(p, e.target.value);
    }


    const handleSave  = () => {
        save();
    }
    return (
        <div className='domino_edit' >
            <div>
                <input value={plate.left} onChange={(e) => handleInputs(e,'left' )}></input>
                <input value={plate.right} onChange={(e) => handleInputs(e,'right' )}></input>
            </div>
            <div className='domino_buttons'>
                <div className='domino_buttons_ok' onClick={handleSave}>✅ </div>
                <div className='domino_buttons_delete' onClick={handleDelete}>❌</div>
            </div>

        </div>
    );
}
export default Edit;