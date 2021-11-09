// 1. importuojame
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import RouterBasic from "./Components/RouterBasic";

function App() {



    return (
        //2. parasome router
        <Router>
            <h1>Hello there!</h1>
            <ul className='hello-meniu'>
                <li>
                    <Link to='/'>Basic</Link>
                    <Link to='/africa'>Africa</Link>
                    <Link to='/australia'>Australia</Link>
                    <Link to='/antarctica'>Antarctica</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<RouterBasic/>}>
                </Route>
            </Routes>

        </Router>
    );
}
export default App;