import React from 'react';
import './styles.css';

export default function Button({ text, onClick, disable }) {
    return <button disabled={disable} className="button" onClick={onClick}>{ text }</button>
}