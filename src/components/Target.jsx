const Target = ({text, handleChange, sendTarget, targetValues}) => {
  return (
    <>
      <h1>目標管理</h1>
      <input type="text" value={text} onChange={handleChange}></input>
      <button onClick={sendTarget}>目標追加</button>
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