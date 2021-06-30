import { Component } from "react";

import './styles.css';

export default class Button extends Component {
    render({text, onClick, disabled} = this.props) {
       return <button disabled={disabled}  className="button" onClick={onClick}>{text}</button>
    }
}