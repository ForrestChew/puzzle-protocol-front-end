import { StagnantChallengesLogic } from './StagnantChallengesLogic';
import ChallengeStrip from '../../components/challenge-strip/ChallengeStrip';
import 'bootstrap/dist/css/bootstrap.css';
import './StagnantChallenges.css';

const StagnantChallenges = () => {
  const challengesArray = StagnantChallengesLogic();
  return (
    <div className="stagnant-challenges-container">
      {challengesArray.map((challenge, idx) => {
        return (
          <ChallengeStrip
            key={idx}
            challengeAttributes={challenge.attributes}
            id={idx}
          />
        );
      })}
    </div>
  );
};

export default StagnantChallenges;
