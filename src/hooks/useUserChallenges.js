import { useContext } from 'react';
import { useMoralisQuery } from 'react-moralis';
import { UserContext } from '../components/UserContextProvider';

export const useUserChallenges = () => {
  const [authedUser] = useContext(UserContext);
  const { data } = useMoralisQuery(
    'StagnantChallenges',
    (query) => query.equalTo('challenger', authedUser.userAddress),
    [authedUser]
  );
  return data;
};
