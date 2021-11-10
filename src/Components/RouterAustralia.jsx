import { useParams } from "react-router";

function RouterAustralia() {

const params = useParams();

    return (
        <div>
            <h2>Australia Hello from {params.from} {params.times} times</h2>
        </div>
    );
}
export default RouterAustralia;