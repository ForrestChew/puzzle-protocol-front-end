import { useState, useEffect } from 'react';
import { useMoralisQuery } from 'react-moralis';

export const useStagnantChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const { data } = useMoralisQuery('StagnantChallengesList');

  useEffect(() => {
    try {
      setChallenges(data);
    } catch (e) {
      console.log(e);
    }
  }, [data]);
  return challenges;
};
