import Modal from './Modal';
const Target = ({text, handleChange, sendTarget, targetValues, isShow, setIsShow}) => {
  return (
    <>
      <h1>目標管理<button onClick={() => {setIsShow(true)}}>+</button></h1>
      {isShow && <Modal 
                  setIsShow={setIsShow} 
                  text={text} 
                  handleChange={handleChange} 
                  sendTarget={sendTarget} 
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