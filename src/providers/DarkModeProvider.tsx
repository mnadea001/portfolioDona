import { createContext, useMemo, useReducer, useEffect, ReactNode } from 'react';
import DarkModeReducer, { DarkModeAction, DARK, LIGHT, initState, DarkModeState } from '../reducers/DarkModeReducer';

export interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: true,
  toggleDarkMode: () => {},
});

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<DarkModeState, DarkModeAction>>(DarkModeReducer, initState);

  const toggleDarkMode = () => {
    dispatch({ type: state.darkMode ? LIGHT : DARK });
  };

  const contextValue = useMemo(() => ({ darkMode: state.darkMode, toggleDarkMode }), [state.darkMode]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', state.darkMode);
  }, [state.darkMode]);

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;