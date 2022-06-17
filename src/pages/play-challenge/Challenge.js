import OptionsMenu from './OptionsMenu';
const Challenge = ({ challenge }) => {
  return (
    <div className="puzzle-container">
      <h1>{challenge.attributes.name}</h1>
      <p>{challenge.attributes.puzzle}</p>
      <OptionsMenu challengeId={challenge.attributes.uid} />
    </div>
  );
};

export default Challenge;
