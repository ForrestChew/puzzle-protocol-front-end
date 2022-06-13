import { useContext, useEffect } from 'react';
import { UserContext } from '../UserContextProvider';
import { useMoralis } from 'react-moralis';
import { useCryptoAuth } from '../../hooks/useCryptoAuth';
import './CryptoLogin.css';

const CryptoLogin = () => {
  const [authedUser, setAuthedUser] = useContext(UserContext);
  const { Moralis } = useMoralis();
  const { checkUser } = useCryptoAuth();

  const login = async () => {
    // Disables button after clicked once
    document.getElementById('login-btn').disabled = true;
    const ethers = Moralis.web3Library;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    setAuthedUser(checkUser());
    document.getElementById('login-btn').disabled = false;
  };

  useEffect(() => {
    if (authedUser.authed) {
      document.getElementById('login-btn').disabled = true;
    } else {
      document.getElementById('login-btn').disabled = false;
    }
  }, [authedUser]);

  return (
    <div className="login-container">
      <button id="login-btn" className="login-btn" onClick={login}>
        {authedUser.authed ? authedUser.userAddress : 'login'}
      </button>
      <button className="login-btn">Bal: {authedUser.userBalance}</button>
    </div>
  );
};

export default CryptoLogin;
