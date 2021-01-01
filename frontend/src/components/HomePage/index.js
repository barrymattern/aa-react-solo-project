import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllProjects } from '../../store/projects';
import HomePageStyle from './HomePage.css'

// Project component – does not have to be in different file
const Project = ({ theProject }) => {
  let imgProjectIds = []; // Only show one image in project home page container

  return (
    <div className='project-info'>
      <div className='project-image-container'>
        {theProject.Images.map((image, idx) => {
          let projectId = image.projectId;

          if (imgProjectIds.includes(projectId)) {
            return null;
          } else {
            imgProjectIds.push(projectId);
            return (
              <Link to={`/projects/${theProject.id}`}>
                <img
                  className='project-image'
                  src={image.url}
                  alt='project visual'
                  key={idx}
                />
              </Link>
            );
          }
        })}
      </div>
      <h3
        className='project-name'>
        <Link to={`/projects/${theProject.id}`}>{theProject.name}</Link>
      </h3>
      <p className='project-username'>by {theProject.User.username}</p>
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
    return fullReduxState.projects.all;
  });

  console.log('CURRENT PROJECTS---------', currentProjects);

  return (
    <div id='home-page'>
      <div className='title'>
        <h2 id='page-title'>Let's make something</h2>
      </div>
      {!currentProjects && <h3>Better make something fast!</h3>} {/* replace with loading gif */}
      {currentProjects && currentProjects.map((project, idx) => {
        return <Project theProject={project} key={idx}/>;
      })}
    </div>
  );
};

export default HomePage;
