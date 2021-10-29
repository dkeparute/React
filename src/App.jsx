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

const modal = () => {
    setShowModal(true);
}

    return (
        <div className='zoo'>
            <ZooCreate create={create} />
            <ZooList animals={animals} modal={modal} />
            <ZooModal showModal={showModal}/>
        </div>
    )
}

export default App;