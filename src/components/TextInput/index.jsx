import './styles.css';

function TextInput({ value, onChange }) {
    return <input className="textInput" placeholder="Faça uma busca.." onChange={onChange} value={value} type="search" />
}

export default TextInput;