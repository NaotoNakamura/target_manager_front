import useTarget from '../hooks/use-target';
import Target from '../components/Target';

const EnhancedTarget = () => {
  const [text, handleChange, sendTarget, targetValues] = useTarget();
  return <Target text={text} handleChange={handleChange} sendTarget={sendTarget} targetValues={targetValues}/>;
}
export default EnhancedTarget;