
import { useNavigate, useParams } from 'react-router-dom';

export const DetailProject = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const sendPage = (e) => {
    e.preventDefault();
    let projectName = e.target.project.value;

    let url = '/projects/' + projectName;

    if (projectName.length <= 0) {
      navigate("/home");
    } else {
      navigate(url);
    }
  };

  return (
    <div className='page-div'>
      <h1>Detail Project</h1>
      {!name && <h2>There is no project to show</h2>}
      {name && <h2>Page to: {name} </h2>}

      <form onSubmit={sendPage}>
        <input type='text' name='project' />
        <input type='submit' />
      </form>

      <p>This is the project page</p>
    </div>
      
  );
};
