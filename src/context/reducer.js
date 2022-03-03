// contexts/User/reducer.js

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };

    default:
      return state;
  }
};

export const initialState = {
  isDarkTheme: true,
};