import { Button, Table } from 'react-bootstrap';
import './ChallengeStrip.css';
// challengeAttributes is an object
const ChallengeStrip = ({ challengeAttributes, id }) => {
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
      <Button className="challenge-strip-btn">Start</Button>
    </div>
  );
};

export default ChallengeStrip;
