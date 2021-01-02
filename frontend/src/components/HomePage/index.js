import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllProjects } from '../../store/projects';
import HomePageStyle from './HomePage.css'
import keyboardImage from '../../public/keyboard.jpg';

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
      <div id='project-text'>
        <h3
          className='project-name'>
          <Link to={`/projects/${theProject.id}`}>{theProject.name.toUpperCase()}</Link>
        </h3>
        <p className='project-username'>by {theProject.User.username}</p>
      </div>
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

  return (
    <div id='home-page'>
      <div className='title'>
        <div id='darken-image'>
          <h2 id='page-title'>
          LET'S<br/>
          CREATE<br/>
          TOGETHER</h2>
        </div>
        <img id='keyboard' src={keyboardImage} alt='keyboard'/>
      </div>
      <div className='all-projects-container'>
        {!currentProjects && <h3>Better make something fast!</h3>} {/* replace with loading gif */}
        {currentProjects && currentProjects.map((project, idx) => {
          return <Project theProject={project} key={idx}/>;
        })}
      </div>
    </div>
  );
};

export default HomePage;
