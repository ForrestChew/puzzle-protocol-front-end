import { useState, useEffect } from 'react';
import { useMoralisQuery } from 'react-moralis';

const StagnantChallengesLogic = () => {
  const [challenges, setChallenges] = useState([]);
  const { data } = useMoralisQuery('StagnantChallenges');
  useEffect(() => {
    try {
      setChallenges(data);
    } catch (e) {
      console.log(e);
    }
  }, [data]);
  return challenges;
};

export { StagnantChallengesLogic };
