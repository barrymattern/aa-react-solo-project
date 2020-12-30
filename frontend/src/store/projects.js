import { fetch } from './csrf.js';

// Variable set up to help avoid spelling errors
const SET_ALL_PROJECTS = 'projects/setProjects';

// Action Creator – produces an object
const setProjects = (projects) => ({
  type: SET_ALL_PROJECTS,
  projects,
});

// Thunk Action Creator – produces a function
export const fetchAllProjects = () => {
  return async (dispatch) => {
    // Interact with server
    const response = await fetch('/api/projects');
    dispatch(
      setProjects(response.data)
    );
  };
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ALL_PROJECTS:
      newState = action.projects;
      return newState;
    default:
      return state;
  }
}

export default reducer;
