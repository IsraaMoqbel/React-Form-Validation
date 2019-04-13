
import React from 'react';
import './style.css';

const TextInput = (props) => {
    
    let formControl = "form-control";
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }
  return (
    <div className="form-group">
    
      <input type="text" className={formControl} {...props} />
    
    </div>
  );
}

export default TextInput;