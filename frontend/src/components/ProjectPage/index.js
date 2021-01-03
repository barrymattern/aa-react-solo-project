import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneProject } from '../../store/projects'
import ProjectPageCss from '../ProjectPage/ProjectPage.css';

const ProjectPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { projectId } = params;

  console.log('****** type of project id *******', typeof projectId, projectId);

  useEffect(async () => {
    // Request to server
    dispatch(
      fetchOneProject(projectId) // Thunk from projects.js
    );
  }, [dispatch]);

  
  const currentProject = useSelector(fullReduxState => {
    return fullReduxState.projects.viewed;
  });

  if (!currentProject) return null;

  // Ensure instructions are shown in page in order user chooses
  // const orderOfInstructions = JSON.parse(currentProject.step);
  // const instructionsInCorrectOrder = orderOfInstructions.map(instructionId => {
  //   return currentProject.Instructions.find(instruction => {
  //     return instruction.id === instructionId;
  //   });
  // });

  // TODO: add classes/ids for styling
  return (
    <>
      {currentProject &&
        <div >
          <div>
            <h2>{currentProject.name}</h2>
            {currentProject.User &&
              <p>by {currentProject.User.username}</p>
            }
          </div>
          <div>
            {currentProject.Images && 
              currentProject.Images.map((image, idx) => {
                return <img src={image.url} alt='project visual' key={idx}/>
              })
            }
          </div>
          <div>
            <h3>Instructions</h3>
            {currentProject.Instructions &&
              currentProject.Instructions.map((instruction, idx) => {
                  return <p key={idx}>{instruction.text}</p>;
              })
            }
          </div>
          <div>
            <h3>Comments</h3>
            {currentProject.Comments &&
              currentProject.Comments.map((comment, idx) => {
                return <p key={idx}>{comment.text}</p>;
              })
            }
          </div>
        </div>
      }
    </>
  );
};

export default ProjectPage;
