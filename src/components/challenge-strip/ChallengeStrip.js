import { Button, Table } from 'react-bootstrap';
import { useContractInteractions } from '../../hooks/useContractInteractions';
import { useMutateChallenge } from '../../hooks/useMutateChallenge';
import './ChallengeStrip.css';
// challengeAttributes is an object
// id ---> is the challenge id as seen by users. Not it's id represented on the blockchain or DB.
const ChallengeStrip = ({ challengeAttributes, id }) => {
  const { startSChallenge } = useContractInteractions();
  const { activateChallenge } = useMutateChallenge(challengeAttributes.uid);

  const handleChallengeStart = async () => {
    try {
      const { uid, wager } = challengeAttributes;
      await startSChallenge(uid, wager).then(() => {
        activateChallenge();
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="strip-outer-container">
      <div className="strip-inner-container">
        <h5 className="challenge-name">{challengeAttributes.name}</h5>
        <Table striped borderless hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Wager</th>
              <th>Payout</th>
              <th>Refund</th>
              <th>Difficulty</th>
              <th>Attempts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-cell" style={{ color: 'gray' }}>
                {id + 1}
              </td>
              <td className="table-cell" style={{ color: 'green ' }}>
                {challengeAttributes.wager}
              </td>
              <td className="table-cell" style={{ color: 'green' }}>
                {challengeAttributes.payout}
              </td>
              <td className="table-cell" style={{ color: 'green' }}>
                {challengeAttributes.refundOnFlee}
              </td>
              <td className="table-cell" style={{ color: 'crimson' }}>
                {challengeAttributes.difficulty}
              </td>
              <td>{challengeAttributes.amountOfGuesses}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button className="challenge-strip-btn" onClick={handleChallengeStart}>
        Start
      </Button>
    </div>
  );
};

export default ChallengeStrip;
