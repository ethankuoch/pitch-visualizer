import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './Home.css';
import { pitchTypes } from '@/globalVariables.ts';
import { Card, CardBody, Button } from '@nextui-org/react';

function Cards() {
  return (
    <>
      {pitchTypes.map(pitchType => {
        return (
          <Card key={pitchType}>
            <CardBody>
              {pitchType}
              <Button
                color="primary"
                onClick={() => (window.location.href = `/pitch/${pitchType}`)}>
                View
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
}

function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Cards />
    </>
  );
}

export default Home;
