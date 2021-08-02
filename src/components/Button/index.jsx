import React from 'react';
import './styles.css';
import Types from 'prop-types';

export default function Button({ text, onClick, disabled = false }) {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: Types.string.isRequired,
  onClick: Types.func.isRequired,
  disabled: Types.bool,
};
