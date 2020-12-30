// import { fetch } from '../../store/csrf';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProjects } from '../../store/projects';

// Project component – does not have to be in different file
const Project = ({ theProject }) => {
  return (
    <div>
      {theProject.Images.map(image => {
        return <img src={image.url} alt='project visual' />
      })}
      <h3>{theProject.name}</h3>
      <h4>{theProject.User.username}</h4>
    </div>
  );
};

// HomePage component
const HomePage = () => {
  const dispatch = useDispatch(); // Send Action to Redux
  
  // const [currentProjects, setProjects] = useState([]);
  const currentProjects = useSelector(fullReduxState => {
    return fullReduxState.projects;
  });

  useEffect(async () => {
    // Request to server
    dispatch(
      fetchAllProjects() // Thunk from projects.js
    );
  }, [dispatch]);

  return (
    <div id='home-page'>
      <h2>Let's make something</h2>
      {!currentProjects && <h3>Better make something fast!</h3>} {/* replace with loading gif */}
      {currentProjects && currentProjects.map((project) => {
        return <Project theProject={project} />;
      })}
    </div>
  );
};

export default HomePage;
