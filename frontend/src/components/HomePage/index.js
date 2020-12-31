import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProjects } from '../../store/projects';

// Project component – does not have to be in different file
const Project = ({ theProject }) => {
  return (
    <div>
      {theProject.Images.map((image, idx) => {
        return <img src={image.url} alt='project visual' key={idx}/>
      })}
      <h3>{theProject.name}</h3>
      <p>{theProject.User.username}</p>
    </div>
  );
};

// HomePage component
const HomePage = () => {
  const dispatch = useDispatch(); // Send Action to Redux

  useEffect(async () => {
    // Request to server
    dispatch(
      fetchAllProjects() // Thunk from projects.js
    );
  }, [dispatch]);

  const currentProjects = useSelector(fullReduxState => {
    return fullReduxState.projects;
  });

  return (
    <div id='home-page'>
      <h2>Let's make something</h2>
      {!currentProjects && <h3>Better make something fast!</h3>} {/* replace with loading gif */}
      {currentProjects && currentProjects.map((project, idx) => {
        return <Project theProject={project} key={idx}/>;
      })}
    </div>
  );
};

export default HomePage;
