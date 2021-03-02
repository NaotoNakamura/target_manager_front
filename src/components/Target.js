import Modal from './Modal';
const Target = ({targetValues, isShow, setIsShow, setTargetValues}) => {
  return (
    <>
      <h1>目標管理<button onClick={() => {setIsShow(true)}}>+</button></h1>
      {isShow && <Modal 
                  setIsShow={setIsShow} 
                  setTargetValues={setTargetValues} 
                  targetValues={targetValues} 
      />}

      {targetValues.map((target, i) => (
        <div key={i}>
          {target.id}：{target.target_title}
          <input type="text"></input><button>タスク追加</button>
        </div>
      ))}
    </>
  );
}

export default Target;