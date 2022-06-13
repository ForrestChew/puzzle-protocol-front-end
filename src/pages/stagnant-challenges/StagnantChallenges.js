import { useStagnantChallenges } from '../../hooks/useStagnantChallenges';
import ChallengeStrip from '../../components/challenge-strip/ChallengeStrip';
import 'bootstrap/dist/css/bootstrap.css';
import './StagnantChallenges.css';

const StagnantChallenges = () => {
  const challengesArray = useStagnantChallenges();
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
