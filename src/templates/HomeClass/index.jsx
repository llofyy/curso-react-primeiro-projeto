import { Component } from 'react';
import './styles.css';

class HomeClass extends Component {

    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            return { counter: prevState.counter + 1 }
        }, () => {
            console.log(this.state.counter);
        });
    }
    
    render() {
        return (
            <div className="container">
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default HomeClass;