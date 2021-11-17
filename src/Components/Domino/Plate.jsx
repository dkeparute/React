import Dot from "./Dot";
import Edit from "./Edit";

function Plate({ plate, editDots, selectEdit, del, change, save }) {

    if (plate.id === editDots.id) {
        return (
            <Edit plate={plate} del={del} change={change} save={save} editDots={editDots}></Edit>
        )
    }
    return (
        <div className='plate' onClick={() => selectEdit(plate)}>
            <div className="left-half">
                <Dot dots={plate.left} />
            </div>
            <div className="right-half">
                <Dot dots={plate.right} />
            </div>
        </div>
    );
}
export default Plate;