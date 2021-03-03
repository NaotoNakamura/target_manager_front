import React, { useState } from 'react';

const TaskModal = ({targetValues, setTargetValues, setShowTask, targetId, targetTitle}) => {
  const sendTask = () => {
  
    setShowTask(false)
  }
    return (
      <div id="overlay" onClick={()=>{setShowTask(false)}}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <div>
            {targetId}：{targetTitle}
            {targetValues[1].id}
          </div>
          <select>
            <option value="day">DAY</option>
            <option value="week">WEEK</option>
            <option value="month">MONTH</option>
          </select>
          <input type="text"></input>
          <div>
            開始日：<input type="date"name="日付"/> 〜 終了日：<input type="date"name="日付"/></div>
          <button onClick={()=>{sendTask()}}>タスク追加</button>
        </div>
      </div>
    );
}


export default TaskModal;