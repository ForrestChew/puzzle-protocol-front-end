import { useMoralisQuery } from 'react-moralis';
export const useDeleteChallenge = (uid) => {
  const { fetch } = useMoralisQuery('StagnantChallengesList', (query) => {
    query.equalTo('uid', uid);
  });
  const destroyChallenge = async () => {
    const challengeToDestroy = await fetch();
    console.log(challengeToDestroy);
    // challengeToDestroy.destroy().then(() => {
    //   console.log('Object Destroyed');
    // });
  };
  return { destroyChallenge };
};
