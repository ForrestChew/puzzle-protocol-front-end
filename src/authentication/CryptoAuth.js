import { useState } from 'react';
import { useMoralis } from 'react-moralis';

export const CryptoAuth = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [authedAccount, setAuthedAccount] = useState(null);

  window.ethereum.on('accountsChanged', async (accounts) => {
    const activeAccount = await accounts[0];
    if (accounts.length) setAuthedAccount(activeAccount);
  });

  window.ethereum.on('disconnect', () => {
    setAuthedAccount(null);
  });

  const login = async () => {
    await authenticate().then(() => {
      try {
        setAuthedAccount(user.get('ethAddress'));
      } catch (e) {
        console.log(e);
      }
    });
  };

  const cryptoLogout = () => {
    logout();
    setAuthedAccount(null);
  };

  return { authedAccount, login, isAuthenticated, user, cryptoLogout };
};
