import { useReducer } from "react";
import { addLeft } from "../../Actions/domino";
import { addRight } from "../../Actions/domino";
import { dominoReducer } from "../../Reducer/dominoReducer";

//1 komponentas turi buti kuo maziau uzkimstas biznio logika, o reduceris yra ta vieta kur galima rasyti logikos variacijas

function Create({create}) {

    const [plate, dispatchPlate] = useReducer(dominoReducer, {
        left: 0,
        // padarysim jog rodytu klaida jeigu blogai ivesta info
        leftErr: false,
        right: 0,
        // padarysim jog rodytu klaida jeigu blogai ivesta info
        rightErr: false
    });

    // eventas
    const handleInput = (e, p) => {
        if ('left' === p) {
            dispatchPlate(addLeft(e.target.value));
        }
        if ('right' === p) {
            dispatchPlate(addRight(e.target.value));
        }
    }

    const handleCreate = () => {
        create({
            left: plate.left,
            right: plate.right
        });
    }


    return (
        <div className='domino_create'>
            <div className='domino_create_header'>
                Create new DOMINO plate
            </div>
            <div className='domino_create_body'>
                <div>
                    <input type="text" style={{backgroundColor: plate.leftErr ? 'red' : 'white'}} onChange={(e) => handleInput(e, 'left')} value={plate.left} />
                    <input type="text" style={{backgroundColor: plate.rightErr ? 'red' : 'white'}} onChange={(e) => handleInput(e, 'right')} value={plate.right} />
                </div>
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
    );
}
export default Create;