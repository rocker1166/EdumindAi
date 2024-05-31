// context/InputContext.js
import { createContext, useState, useEffect } from 'react';

interface InputContextType {
  input: string;
  setInput: (value: string) => void;
}

const InputContext = createContext<InputContextType>({
  input: '',
  setInput: () => {},
});

export const InputProvider = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const storedInput = localStorage.getItem('userContextInput');
    if (storedInput) {
      setInput(storedInput);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userContextInput', input);
  }, [input]);

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputContext;