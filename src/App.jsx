import axios from "axios";
import { useEffect, useState } from "react";
import ZooCreate from "./Components/ZooCreate";
import ZooList from "./Components/ZooList";
function App() {
    // HOOKAS
    const [animals, setAnimals] = useState([]);

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    useEffect(() => {
        axios.get('http://localhost:3003/animals')
            .then(res => {
                setAnimals(res.data);
                console.log(res.data);
            })
    }, [lastUpdate])


    // create funcija gauna animal ir isiuncia duomenis i serveri
    const create = animal => {
        axios.post('http://localhost:3003/animals', animal)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }


    return (
        <div className='zoo'>
            <ZooList animals={animals} />
            <ZooCreate create={create} />
        </div>
    )
}

export default App;