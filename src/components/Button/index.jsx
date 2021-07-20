import React from 'react';
import './styles.css';

export default function Button({ text, onClick, disabled }) {
    return <button disabled={disabled} className="button" onClick={onClick}>{ text }</button>
}