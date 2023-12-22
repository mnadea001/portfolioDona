export interface DarkModeState {
    darkMode: boolean;
  }
  
  export const initState: DarkModeState = {
    darkMode: true,
  };
  
  export const DARK = 'DARK';
  export const LIGHT = 'LIGHT';
  
  export interface DarkModeAction {
    type: typeof DARK | typeof LIGHT;
  }
  
  const DarkModeReducer = (state: DarkModeState, action: DarkModeAction): DarkModeState => {
    switch (action.type) {
      case DARK:
        return {
          ...state,
          darkMode: true,
        };
      case LIGHT:
        return {
          ...state,
          darkMode: false,
        };
      default:
        return state;
    }
  };
  
  export default DarkModeReducer;