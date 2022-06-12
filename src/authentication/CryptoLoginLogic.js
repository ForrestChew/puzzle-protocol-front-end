import { useMoralis } from 'react-moralis';

export const useLogin = () => {
  const { authenticate, isAuthenticated } = useMoralis();

  const login = async () => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      await authenticate().then((user) => {
        console.log(user.get('ethAddress')).catch((e) => console.log(e));
      });
    }
  };
  return { login };
};
