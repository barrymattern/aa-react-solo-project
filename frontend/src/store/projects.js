import { fetch } from './csrf.js';

const GET_PROJECTS = 'projects/getProjects';

const getProjects = (projects) => ({
  type: GET_PROJECTS,
  projects
});

