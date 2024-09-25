import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './Home.css';
import { pitchTypes } from '@/globalVariables.ts';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';

function Cards() {
  return (
    <>
      {pitchTypes.map(pitchType => {
        return (
          <Card className="bg-gray-800">
            <CardMedia component="img" alt={pitchType} height="140" image="/" />
            <CardContent>{pitchType}</CardContent>
            <CardActions>
              <Button>View</Button>
            </CardActions>
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
