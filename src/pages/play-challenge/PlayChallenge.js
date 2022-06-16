import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useUserChallenges } from '../../hooks/useUserChallenges';
import Challenge from './Challenge';
import NoActiveChallenge from './NoActiveChallenge';
import './PlayChallenge.css';

const PlayChallenge = () => {
  const [challengeObject, setChallengeObject] = useState(null);
  const userChallenges = useUserChallenges();
  const continueChallenge = (challenge) => {
    setChallengeObject(challenge);
  };

  return (
    <>
      <div className="play-challenge-page">
        <div className="selection-bar">
          <h3 className="title">Incomplete</h3>
          {userChallenges.map((challenge, idx) => {
            return (
              <div key={idx} className="challenge-container">
                <p className="challenge">{challenge.attributes.name}</p>
                <Button onClick={() => continueChallenge(challenge)}>
                  Continue
                </Button>
              </div>
            );
          })}
        </div>
        <div className="puzzle-container">
          {challengeObject !== null ? (
            <Challenge challenge={challengeObject} />
          ) : (
            <NoActiveChallenge />
          )}
        </div>
        {challengeObject !== null ? (
          <div className="selection-bar stats">
            <h3 className="title">Stats</h3>
            <Table striped borderless hover size="sm">
              <tbody>
                <tr>
                  <td>Wager</td>
                  <td className="" style={{ color: 'green ' }}>
                    {challengeObject.attributes.wager}
                  </td>
                </tr>
                <tr>
                  <td>Payout</td>
                  <td style={{ color: 'green' }}>
                    {challengeObject.attributes.payout}
                  </td>
                </tr>
                <tr>
                  <td>Refund</td>
                  <td style={{ color: 'green' }}>
                    {challengeObject.attributes.refundOnFlee}
                  </td>
                </tr>
                <tr>
                  <td>Difficulty</td>
                  <td style={{ color: 'crimson' }}>
                    {challengeObject.attributes.difficulty}
                  </td>
                </tr>
                <tr>
                  <td>Attempts</td>
                  <td>{challengeObject.attributes.amountOfGuesses}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default PlayChallenge;
