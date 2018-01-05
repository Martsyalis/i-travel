import React from 'react';

export default function InputField({ fieldName, type = 'text' }){
  return(
    <div className="field">
      <div className="control">
        <input
          name= {fieldName}
          className="input"
          type={type}
          placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
        />
      </div>
    </div>
  );
}