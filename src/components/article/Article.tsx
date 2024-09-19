import './Article.scss';
import { useParams, useNavigate } from 'react-router-dom';
import NoMatch from '@/components/noMatch/NoMatch.tsx';

function Article() {
  const { pitchType } = useParams();
  const navigate = useNavigate();

  if (pitchType !== 'fastball') {
    return <NoMatch />;
  }

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <p>Valid</p>
    </>
  );
}

export default Article;
