import { useParams } from "react-router";

function RouterAfrica() {
const paramsFromUrl = useParams();

    return (
        <div>
            <h2>Africa Hello:{paramsFromUrl.times} times</h2>
        </div>
    );
}
export default RouterAfrica;