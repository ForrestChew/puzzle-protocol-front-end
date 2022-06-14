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
        console.log(challenge[0]);
        challenge[0].set('isActive', true);
        challenge[0].set('challenger', authedUser.userAddress);
        challenge[0].save().then(() => console.log('Challenge activated'));
      },
      onError: (errors) => console.log(errors),
    });
  };

  return { activateChallenge };
};
