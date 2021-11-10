import { Link, useResolvedPath, useMatch } from 'react-router-dom';

function RouterCustomLink({ children, to}) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link style={{
                textDecoration: match ? "underline" : "none",
                color: match ? 'black' : 'white'
            }}
                to={to}>{children} </Link>
        </div>
    );
}
export default RouterCustomLink;
