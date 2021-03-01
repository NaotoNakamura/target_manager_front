import React from 'react';

const TargetForm = ({setIsShow, text, handleChange, sendTarget}) => {
    return (
      <div id="overlay" onClick={() => {setIsShow(false)}}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => {setIsShow(false)}}>close</button>
          <div></div>
          <input type="text" value={text} onChange={handleChange}></input>
          <button onClick={sendTarget}>目標追加</button>
        </div>
      </div>
    );
}


export default TargetForm;