import { fetch } from '../../store/csrf';
import { useEffect, useState } from 'react';

// Project component does not have to be in different file
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

const HomePage = () => {
  const [currentProjects, setProjects] = useState([]);

  useEffect(async () => {
    const response = await fetch('/api/projects');
    setProjects(response.data);
  }, []);

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



// import { fetch } from '../../store/csrf';
// import { useEffect, useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { getProjects } from '../../store/projects';

// const Project = ({project}) => {

//   return (
//     <div>
//       <h3>{project.name}</h3>
//     </div>
//   );
// };

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const currentProjects = useSelector();

//   return (
//     <div>
//       <h3>{project.name}</h3>
//     </div>
//   );
// };

// export default HomePage;
