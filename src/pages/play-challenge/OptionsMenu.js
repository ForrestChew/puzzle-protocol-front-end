import { Button, Form } from 'react-bootstrap';
import './PlayChallenge.css';

const OptionsMenu = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Answer" />
      </Form.Group>
      <div className="options-container">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="outline-danger">Flee</Button>
      </div>
    </Form>
  );
};

export default OptionsMenu;
