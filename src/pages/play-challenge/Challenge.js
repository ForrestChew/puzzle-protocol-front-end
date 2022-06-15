import OptionsMenu from './OptionsMenu';
const Challenge = ({ challenge }) => {
  return (
    <div>
      <h1>{challenge.attributes.name}</h1>
      <p>{challenge.attributes.puzzle}</p>
      <OptionsMenu />
    </div>
  );
};

export default Challenge;
