import axios from "axios";
import { useEffect, useState } from "react";
import ZooCreate from "./Components/ZooCreate";
import ZooList from "./Components/ZooList";
import ZooModal from "./Components/ZooModal";
function App() {
    // HOOKAS
    const [animals, setAnimals] = useState([]);

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [showModal, setShowModal] = useState(false);

    const [modalAnimal, setModalAnimal] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    })

    useEffect(() => {
        axios.get('http://localhost:3003/animals')
            .then(res => {
                setAnimals(res.data);
                console.log(res.data);
            })
    }, [lastUpdate])

const create = animal => {
    axios.post('http://localhost:3003/animals', animal)
    .then(res => {
        console.log(res.data);
        setLastUpdate(Date.now());
    })
}

const edit = (animal, id) => {
    setShowModal(false);
    axios.put('http://localhost:3003/animals' + id, animal)
    .then(res => {
        console.log(res.data);
        setLastUpdate(Date.now());
    })
}

const modal = animal => {
    setShowModal(true);
    setModalAnimal(animal);
}

const hide = () => {
    setShowModal(false);

}

const remove  = ( id) => {
    setShowModal(false);
    axios.delete('http://localhost:3003/animals' + id)
    .then(res => {
        console.log(res.data);
        setLastUpdate(Date.now());
    })
}

    return (
        <div className='zoo'>
            <ZooCreate create={create} />
            <ZooList animals={animals} modal={modal} />
            <ZooModal remove={remove} edit={edit} hide={hide} showModal={showModal} animal={modalAnimal}/>
        </div>
    )
}

export default App;