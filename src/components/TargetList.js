import React, { useState } from 'react';
import TaskModal from './TaskModal';

const TargetList = ({setTargetValues, targetValues}) => {
  const [isShowTask, setShowTask] = useState(false);
  const [targetId, setTargetId] = useState();
  const [targetTitle, setTargetTitle] = useState();
  const taskAdd = (id, title) => {
    setShowTask(true)
    setTargetId(id)
    setTargetTitle(title)
  }
    return (
      <>
        {targetValues.map((target) => (
        <div key={target.id}>
          {target.id}：{target.target_title}
          <button onClick={() => {taskAdd(target.id, target.target_title)}}>タスク追加</button>
          {isShowTask && <TaskModal 
                          targetValues={targetValues}
                          setTargetValues={setTargetValues}
                          setShowTask={setShowTask} 
                          targetId={targetId} 
                          targetTitle={targetTitle}/>}
        </div>
      ))}
      </>
    );
}


export default TargetList;