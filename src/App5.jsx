import CowField from "./Components/CowField";
import SheepField from "./Components/SheepField";

function App() {

    return (
        <div>
            <h1>Hello, Cows!</h1>
            <CowField counterColor={'green'} />
            <h1>Hello, Sheeps!</h1>
            <SheepField/>
        </div>
    );
}
export default App;