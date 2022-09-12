import { useState } from 'react';
import type { FAQType } from './types';

export const useFAQ = () => {
  const [state, setState] = useState<FAQType>({
    selected: 0,
  });

  const handleSelected = (newSelected: number) => {
    setState({
      ...state,
      selected: newSelected,
    });
  };

  return {
    state,
    handleSelected,
  };
};
