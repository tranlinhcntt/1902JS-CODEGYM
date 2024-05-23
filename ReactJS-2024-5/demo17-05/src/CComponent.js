import React, {Component} from "react";

let x = 10;
class CComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            y: 20,
        }    
    }
    upX = () => {
        x++
    }
    upY = () => {
        this.setState({y: this.state.y + 1})
    }    
    
    render() {
        return (
            <>
            <h2>
                CComponent Demo {x}, {this.state.y}
            </h2>
            <button onClick={this.upX}>Tăng X</button>
            <button onClick={this.upY}>Tăng Y</button>
            </>
        )
    }
}
export default CComponent;