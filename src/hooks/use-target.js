import { useState } from 'react';
import {target} from '../target';

const useTarget = () => {
  const [text, setText] = useState('');
  const [targetValues, setTargetValues] = useState(target);
  const sendTarget = () => {
    setTargetValues(
      [...targetValues, {
        id: targetValues.length + 1,
        target_title: text,
      }]
    );
    setText("");
  }
  const handleChange = (e) => {
    setText(e.target.value);
  }
  return [text, handleChange, sendTarget, targetValues];
}
export default useTarget;