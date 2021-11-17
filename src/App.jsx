import { useEffect, useReducer, useState } from "react";
import { addDomino, delDomino, getDominos, hideMessage, showMessage, updateDomino } from "./Actions/domino";
import Create from "./Components/Domino/Create";
import Message from "./Components/Domino/Message";
import Plate from "./Components/Domino/Plate";
import { dominosReducer, messageReducer } from "./Reducer/dominoReducer";

// 0
function App() {
    // cia bus visi domino
    const [dominos, dispachDominos] = useReducer(dominosReducer, []);
    const [message, dispachMessage] = useReducer(messageReducer, {
        text: '',
        show: false
    });

    const [editDots, setEditDots] = useState({ left: 0, right: 0, id: 0 });

    // PRASIDEDA CRUDAS-----------------------------------------------------

    // NODE READ
    useEffect(() => {
        dispachDominos(getDominos());

    }, [])

    // NODE CREATE
    const create = (domino) => {
        dispachDominos(addDomino(domino));
        dispachMessage(showMessage('New Domino plate was created!'));
        setTimeout(() => { dispachMessage(hideMessage()) }, 3000);
    }
    // NODE DELETE

    const deleteDomino = (id) => {
        dispachDominos(delDomino(id));
    }

    // NODE UPDATE
    const update = (id, domino) => {
        dispachDominos(updateDomino(id, domino));

    }

    // EDIT INPUT CONTROL
    const selectEdit = (domino) => {
        setEditDots(domino);
    }

    const save = () => {
        update(editDots.id, {
            left: editDots.left,
            right: editDots.right
        });
        setEditDots({ left: 0, right: 0, id: 0 });
    }

    const change = (side, dots) => {
        const copyeditDots = { ...editDots };
        if ('left' === side) {
            copyeditDots.left = dots;
        }
        else if ('right' === side) {
            copyeditDots.right = dots;
        }
        setEditDots(copyeditDots);
    }


    return (
        <div className='domino'>
            <h1>Let's play Domino</h1>
            <Create create={create} />
            <Message msg={message} />
            <div className='domino_table'>
                {
                    dominos.map(p => <Plate
                        key={p.id}
                        change={change}
                        plate={p}
                        save={save}
                        editDots={editDots}
                        selectEdit={selectEdit}
                        del={deleteDomino}
                    ></Plate>)
                }
            </div>

        </div>
    );
}
export default App;