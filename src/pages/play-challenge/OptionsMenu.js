import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useContractInteractions } from '../../hooks/useContractInteractions';
import { useMutateChallenge } from '../../hooks/useMutateChallenge';
import './PlayChallenge.css';

const OptionsMenu = ({ challengeId }) => {
  const [answer, setAnswer] = useState('');

  const { submitAnswer, fleeChallenge } = useContractInteractions();
  const { decrementAmountOfGuesses } = useMutateChallenge(challengeId);

  // Handles the submission of an answer to the current challenge.
  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswer(challengeId, answer).then(() => {
      decrementAmountOfGuesses();
    });
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Answer"
          onChange={handleChange}
        />
      </Form.Group>
      <div className="options-container">
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => fleeChallenge(challengeId)}
        >
          Flee
        </Button>
      </div>
    </Form>
  );
};

export default OptionsMenu;
