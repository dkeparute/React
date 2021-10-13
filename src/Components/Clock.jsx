import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super();
        this.state = { clock: new Date().toLocaleTimeString() };

    }
    componentDidMount() {

        setInterval(
            () => this.tick(),
            1000
        );
    }
    tick() {
        this.setState({
          clock: new Date().toLocaleTimeString()
        });

    }

    render() {
        return (
            <h1>{this.state.clock}</h1>
        )

    }

}
export default Clock;