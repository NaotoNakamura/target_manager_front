import React, { useState } from 'react';

const TargetForm = ({setIsShow, setTargetValues, targetValues}) => {
  const [text, setText] = useState('');
  const sendTarget = () => {
    setTargetValues(
      [...targetValues, {
        id: targetValues.length + 1,
        target_title: text,
      }]
    );
    setText("");
    setIsShow(false)
  }
  const handleChange = (e) => {
    setText(e.target.value);
  }
    return (
      <div id="overlay" onClick={() => {setIsShow(false)}}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => {setIsShow(false)}}>close</button>
          <div></div>
          <input type="text" value={text} onChange={handleChange}></input>
          <button onClick={(sendTarget)}>目標追加</button>
        </div>
      </div>
    );
}


export default TargetForm;