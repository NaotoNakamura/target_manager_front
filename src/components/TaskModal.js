import React, { useState } from 'react';

const TaskModal = ({targetValues, setTargetValues, setShowTask, index}) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDateKind, setTaskDateKind] = useState('DAY');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const target = targetValues[index];

  const handleChange = (e) => {
    switch (e.target.name) {
      case "text":
        setTaskTitle(e.target.value);
        break;
      case "date":
        setTaskDateKind(e.target.value);
        break;
      case "startdate":
        setStartDate(e.target.value);
        break;
      case "enddate":
        setEndDate(e.target.value);
        break;
      default:
        break;
    }
  } 

  const sendTask = () => {
    const newTarget = [...targetValues]
    const lastTargetNumber = targetValues[index].tasks.slice(-1)[0]?.id
    const test = newTarget[index].tasks.concat([{
            id: lastTargetNumber ? lastTargetNumber + 1 : 1,
            task_title: taskTitle,
            period_kind: taskDateKind,
            start_date: startDate,
            end_date: endDate,
            is_done: false
    }])
    newTarget[index].tasks = test
    setTargetValues(newTarget)
    setShowTask(false)
  }
    return (
      <div id="overlay" onClick={()=>{setShowTask(false)}}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <div>
            {target.id}：{target.target_title}
          </div>
          <select name="date" onChange={handleChange}>
            <option value="DAY">DAY</option>
            <option value="WEEK">WEEK</option>
            <option value="MONTH">MONTH</option>
          </select>
          <input type="text" name="text" onChange={handleChange}></input>
          <div>
            開始日：<input type="date" name="startdate" onChange={handleChange}/> 
            〜 終了日：<input type="date" name="enddate" onChange={handleChange}/>
          </div>
          <button onClick={()=>{sendTask()}}>タスク追加</button>
        </div>
      </div>
    );
}


export default TaskModal;