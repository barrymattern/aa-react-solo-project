import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneProject } from '../../store/projects'

const ProjectPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { projectId } = params;

  useEffect(async () => {
    // Request to server
    dispatch(
      fetchOneProject(projectId) // Thunk from projects.js
    );
  }, [dispatch]);

  
  const currentProject = useSelector(fullReduxState => {
    return fullReduxState.projects;
  });

  // TODO: add classes/ids for styling
  return (
    <div>
      {currentProject &&
        <div>
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
    </div>
  );
};

export default ProjectPage;

//******************************************************************************

// const ProjectPage = () => {
//   const dispatch = useDispatch();
//   const params = useParams();
//   const { projectId } = params;

//   useEffect(async () => {
//     // Request to server
//     dispatch(
//       fetchOneProject(projectId) // Thunk from projects.js
//     );
//   }, [dispatch]);

  
//   const currentProject = useSelector(fullReduxState => {
//     return fullReduxState.projects;
//   });

//   // TODO: add classes/ids for styling
//   return (
//     <div>
//       {currentProject &&
//         <div>
//           <div>
//             <h2>{currentProject.name}</h2>
//             {currentProject.User &&
//               <p>by {currentProject.User.username}</p>
//             }
//           </div>
//           <div>
//             {currentProject.Images && 
//               currentProject.Images.map((image, idx) => {
//                 return <img src={image.url} alt='project visual' key={idx}/>
//               })
//             }
//           </div>
//           <div>
//             {currentProject.Instructions &&
//               currentProject.Instructions.map((instruction, idx) => {
//                 currentProject.Images.map((image, idx) => {
//                   if (image.instructionId) {
//                     return (
//                       <div>
//                         <p key={idx}>{instruction.text}</p>
//                         <img src={image.url} alt='instruction visual'/>
//                       </div>
//                     );
//                   }
//                   return <p key={idx}>{instruction.text}</p>
//                 });
//               })
//             }
//           </div>
//         </div>  
//       }
//     </div>
//   );
// };
