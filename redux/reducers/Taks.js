import update from "react-addons-update";
const initialState = {
  task: [],
};

const Task = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        task: update(state.task, { $push: [action.payload] }),
      };
    case 'EDIT':
      return {
        ...state,
        task: update(state.task, {[action.id]: {$set: action.content } }),
      };

    default:
      return state;
  }
}
export default Task;