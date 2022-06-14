import { useMoralisQuery } from 'react-moralis';

export const useChallenges = (challengeType, isActive) => {
  const { data } = useMoralisQuery(challengeType, (query) =>
    query.equalTo('isActive', isActive)
  );

  return data;
};
