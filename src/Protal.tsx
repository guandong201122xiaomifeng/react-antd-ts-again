import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// let nextCounter = this.state.counter + 1
//         this.setState({
//             counter: nextCounter
//         })
class Protal extends Component {
    public state = {
        counter:0
    }
    increase() {
        let nextCounter = this.state.counter + 1
        this.setState({
            counter: nextCounter
        })
    }
    render() {
        // 往dom节点挂元素
        // ReactDOM.render(<button>Click</button>,document.getElementById("protal"))
        return (
            <div id="father" onClick = {this.increase.bind(this)}>
                <div>counter: {this.state.counter}</div>
                {/* <button>Click</button> */}
                {
                    ReactDOM.createPortal(<button>createPortal Click</button>,
                        document.getElementById("protal") as HTMLElement)
                }
            </div>
        );
    }
}

export default Protal;