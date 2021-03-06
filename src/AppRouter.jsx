// 1. importuojame
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import RouterAfrica from "./Components/RouterAfrica";
import RouterAntarctica from "./Components/RouterAntarctica";
import RouterAustralia from "./Components/RouterAustralia";
import RouterBasic from "./Components/RouterBasic";
import RouterNotFound from "./Components/RouterNotFound";
import RouterPenguin from "./Components/RouterPenguin";
import RouterPolarBear from "./Components/RouterPolarBear";
import RouterSeal from "./Components/RouterSeal";

function App() {



    return (
        //2. parasome router
        <Router>
            <h1>Hello there!</h1>
            <ul className='hello-menu'>
                <li>
                    <Link to='/'>Basic</Link>
                    <Link to='/africa/77'>Africa </Link>
                    <Link to='/africa/14'>Africa 1</Link>
                    <Link to='/africa/17'>Africa 2</Link>
                    <Link to='/australia/15/kangaroo'>Australia</Link>
                    <Link to='/australia/30/duck'>Australia 1</Link>
                    <Link to='/antarctica'>Antarctica</Link>
                </li>
            </ul>

            <Routes>
                {/* index nustato jog jis yra default ir neturi jokio kelio , cia vietoj uzrasymo su path '/ */}
                <Route index element={<RouterBasic />} ></Route>
                <Route path='/africa/:times' element={<RouterAfrica />} ></Route>
                <Route path='/australia/:times/:from' element={<RouterAustralia />} ></Route>
                <Route path='/antarctica' element={<RouterAntarctica />} >
                    <Route path='penguin' element={<RouterPenguin />} ></Route>
                    <Route path='seal' element={<RouterSeal />} ></Route>
                    <Route path='polar-bear' element={<RouterPolarBear />} ></Route>
                </Route>
                {/* rodo visus kas nepateko i rautus */}
                <Route path='*' element={<RouterNotFound />} ></Route>
            </Routes>
        </Router >
    );
}
export default App;