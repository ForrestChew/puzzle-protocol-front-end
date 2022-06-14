import React, { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState({});
  const { Moralis } = useMoralis();

  const getUser = async () => {
    const ethers = Moralis.web3Library;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    try {
      const signerAddress = await signer.getAddress();
      const signerBalance = await signer.getBalance();
      return {
        authed: true,
        userAddress: signerAddress,
        userBalance: Number(signerBalance),
      };
    } catch (e) {
      return { authed: false, messege: 'User not signed in' };
    }
  };

  useEffect(() => {
    const initailAuthedUser = async () => {
      setAuthedUser(await getUser());
    };
    initailAuthedUser();
  }, []);

  window.ethereum.on('accountsChanged', async () => {
    setAuthedUser(await getUser());
  });

  return (
    <UserContext.Provider value={[authedUser, setAuthedUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
