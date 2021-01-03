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

  const toggleBackgroundColor = () => {
    const pink = "rgb(255, 58, 128)";
    const yellow = "rgb(227, 255, 58)";
    const green = "rgb(58, 255, 185)";
    const purple = "rgb(87, 58, 255)";
    // const navy = "rgb(32, 35, 40)";
    const gray = "rgb(84, 92, 92))";
    // const pink = "rgb(255, 58, 128)";
    // const white = "rgb(255, 255, 255)";
    
    let backgroundColor = document.body.style.backgroundColor;
    let currentIndex = 0;

    const interval = setInterval(() => {
      const colorArr = [ pink, yellow, green, purple];

      document.body.style.backgroundColor = colorArr[currentIndex];
      currentIndex++;

      if (currentIndex === undefined || currentIndex >= colorArr.length) {
        currentIndex = 0;
      }

      // TODO: Fix bug to allow clearInterval
      if (backgroundColor === pink) {
        clearInterval(interval);
        document.body.style.backgroundColor = gray;
      }
    }, 1000);
  };

  return (
    <div className='home-page'>
      <div id='surprise' onClick={toggleBackgroundColor}></div>
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
