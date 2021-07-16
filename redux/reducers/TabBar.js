const initialState = {
  tab: 1,
};

const TabBar = (state = initialState, action) => {
  switch (action.type) {
    case `SET_${action.type.split("_")[1]}`:
      return {
        ...state,
        [action.payload.varName]: action.payload.value
      };
    default:
      return state;
  }
}
export default TabBar;