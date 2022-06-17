import { useContext } from 'react';
import { useMoralisQuery } from 'react-moralis';
import { UserContext } from '../components/UserContextProvider';

export const useMutateChallenge = (challengeId) => {
  const [authedUser] = useContext(UserContext);
  const { fetch } = useMoralisQuery(
    'StagnantChallenges',
    (query) => query.equalTo('uid', challengeId),
    [challengeId]
  );

  const activateChallenge = async () => {
    await fetch({
      onSuccess: (challenge) => {
        challenge[0].set('isActive', true);
        challenge[0].set('challenger', authedUser.userAddress);
        challenge[0].save().then(() => console.log('Challenge activated'));
      },
      onError: (errors) => console.log(errors),
    });
  };

  const decrementAmountOfGuesses = async () => {
    let guessAttempts;
    await fetch({
      onSuccess: (challenge) => {
        guessAttempts = Number(challenge[0].attributes.amountOfGuesses);
        guessAttempts--;
        challenge[0].set('amountOfGuesses', guessAttempts.toString());
        challenge[0].save().then(() => console.log('Guess made'));
      },
    });
  };

  return { activateChallenge, decrementAmountOfGuesses };
};
