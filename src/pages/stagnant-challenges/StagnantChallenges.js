import { useChallenges } from '../../hooks/useChallenges';
import ChallengeStrip from '../../components/challenge-strip/ChallengeStrip';
import 'bootstrap/dist/css/bootstrap.css';
import './StagnantChallenges.css';

const StagnantChallenges = () => {
  const stagnantchallenges = useChallenges('StagnantChallenges', false);
  return (
    <div className="stagnant-challenges-container">
      {stagnantchallenges.map((challenge, idx) => {
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
