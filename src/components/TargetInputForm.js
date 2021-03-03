import React, { useState } from 'react';

const TargetInputForm = ({setTargetValues, targetValues}) => {
  const [text, setText] = useState('');
  const sendTarget = () => {
    setTargetValues(
      [...targetValues, {
        id: targetValues.length + 1,
        target_title: text,
      }]
    );
    setText("");
  }
  const handleChange = (e) => {
    setText(e.target.value);
  }
    return (
      <>
        <input type="text" value={text} onChange={handleChange}></input>
        <button onClick={(sendTarget)}>目標追加</button>
      </>
    );
}


export default TargetInputForm;