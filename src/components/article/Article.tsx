import './Article.css';
import { useParams, useNavigate } from 'react-router-dom';
import { pitchTypes } from '@/globalVariables.ts';
import NoMatch from '@/components/noMatch/NoMatch.tsx';

function Article() {
  const { pitchType } = useParams();
  const navigate = useNavigate();

  if (!pitchTypes.includes(pitchType as string)) {
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
