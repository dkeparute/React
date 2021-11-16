import { useReducer } from "react";
//1

function Create() {

const [plate, dispatchPlate] = useReducer(dominoPlateReducer, {left: 0, rigt: 0});
 


    return (
        <div className='domino_create'>
            <div className='domino_create_header'>
                Create new DOMINO plate
            </div>
            <div className='domino_create_body'>
                <div>
                    <input type="text" onChange={() => handleInput('left')}/>
                    <input type="text" onChange={() => handleInput('right')} />
                </div>
                <button>Create</button>
            </div>
        </div>
    );
}
export default Create;