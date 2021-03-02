import { useState } from 'react';
import useTarget from '../hooks/use-target';
import Target from '../components/Target';

const EnhancedTarget = () => {
  const [targetValues, setTargetValues] = useTarget();
  const [isShow, setIsShow] = useState(false);
  return <Target 
            targetValues={targetValues}
            isShow={isShow}
            setIsShow={setIsShow}
            setTargetValues={setTargetValues}
          />;
}
export default EnhancedTarget;