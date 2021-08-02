import './styles.css';
import Types from 'prop-types';

function TextInput({ value, onChange }) {
  return <input className="textInput" placeholder="Faça uma busca.." onChange={onChange} value={value} type="search" />;
}

TextInput.propTypes = {
  value: Types.string.isRequired,
  onChange: Types.func.isRequired,
};

export default TextInput;
