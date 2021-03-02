import { useState } from 'react';
import {target} from '../target';

const useTarget = () => {
  const [targetValues, setTargetValues] = useState(target);
  return [targetValues, setTargetValues];
}
export default useTarget;