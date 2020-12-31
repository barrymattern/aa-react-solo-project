import { fetch } from './csrf.js';

// Variable set up to help avoid spelling errors
const SET_ALL_PROJECTS = 'projects/setProjects';
const SET_ONE_PROJECT = 'projects/setOneProject';

// Action Creator – produces an object
const setProjects = (projects) => ({
  type: SET_ALL_PROJECTS,
  projects,
});

const setOneProject = (project) => ({
  type: SET_ONE_PROJECT,
  project,
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

export const fetchOneProject = (projectId) => {
  return async (dispatch) => {
    // Interact with server
    const response = await fetch(`/api/projects/${projectId}`);
    dispatch(
      setOneProject(response.data)
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
    case SET_ONE_PROJECT:
      newState = action.project;
      return newState;
    default:
      return state;
  }
}

export default reducer;
