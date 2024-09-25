import './Article.css';
import { useParams, useNavigate } from 'react-router-dom';
import { pitchTypes } from '@/globalVariables.ts';
import NoMatch from '@/components/noMatch/NoMatch.tsx';
import { Button } from '@nextui-org/react';
import Baseball from '@/components/baseball/Baseball.tsx';

function Article() {
  const { pitchType } = useParams();
  const navigate = useNavigate();

  if (!pitchTypes.includes(pitchType as string)) {
    return <NoMatch />;
  }

  return (
    <>
      <Button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <p>Valid</p>
      <Baseball />
    </>
  );
}

export default Article;
