import { useState } from 'react';
import useTarget from '../hooks/use-target';
import Target from '../components/Target';

const EnhancedTarget = () => {
  const [text, handleChange, sendTarget, targetValues] = useTarget();
  const [isShow, setIsShow] = useState(false);
  return <Target 
            text={text} 
            handleChange={handleChange} 
            sendTarget={sendTarget} 
            targetValues={targetValues}
            isShow={isShow}
            setIsShow={setIsShow}
          />;
}
export default EnhancedTarget;