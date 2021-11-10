import { Link, Outlet } from "react-router-dom";


function RouterAntarctica() {



    return (
        <div className='antarctica'>
            <h2>Antarctica</h2>
            <ul className='antarctica-menu'>
                <li><Link to='penguin'>Penguin</Link></li>
                <li><Link to='polar-bear'>Polar Bear</Link></li>
                <li><Link to='seal'>Seal</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}
export default RouterAntarctica;