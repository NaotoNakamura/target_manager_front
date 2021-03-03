import TargetInputForm from './TargetInputForm';
import TargetList from './TargetList';

const Target = ({targetValues, setTargetValues}) => {
  return (
    <>
      <h1>目標管理</h1>
      <TargetInputForm setTargetValues={setTargetValues} targetValues={targetValues}/>
      <TargetList setTargetValues={setTargetValues} targetValues={targetValues} />
    </>
  );
}

export default Target;