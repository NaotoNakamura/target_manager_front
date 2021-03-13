import React, { useState } from 'react';
import TaskModal from './TaskModal';

const TargetList = ({setTargetValues, targetValues}) => {
    const [isShowTask, setShowTask] = useState(false);
    const [targetTest, setTarget] = useState();
    const taskAdd = (index) => {
        setShowTask(true)
        setTarget(index)
    }
    const taskDelete = (targetIndex, taskIndex) => {
        const newTargetValues = [...targetValues]
        newTargetValues[targetIndex].tasks.splice(taskIndex, 1)
        setTargetValues(newTargetValues)
    }
    return (
        <>
            {targetValues.map((target, targetIndex) => (
                <div key={target.id}>
                  {target.id}：{target.target_title}
                  <div>
                    {target.tasks && target.tasks.map((task, taskIndex)=>(
                      <div key={task.id}>
                        {task.id}:
                        {task.period_kind}:
                        {task.task_title}:
                        {task.start_date}~
                        {task.end_date}
                        <button>編集</button>
                        <button onClick={() => {taskDelete(targetIndex, taskIndex)}}>削除</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => {taskAdd(targetIndex)}}>タスク追加</button>
                  {isShowTask && <TaskModal 
                                  targetValues={targetValues}
                                  setTargetValues={setTargetValues}
                                  setShowTask={setShowTask} 
                                  index={targetTest}/>}
                </div>
            ))}
        </>
    );
}


export default TargetList;