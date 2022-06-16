import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContextProvider';
import { useMoralis } from 'react-moralis';
import { useCryptoAuth } from '../../hooks/useCryptoAuth';
import './CryptoLogin.css';

const CryptoLogin = () => {
  const [authedUser, setAuthedUser] = useContext(UserContext);
  const [shortenedAddr, setShortenedAddr] = useState('');
  const [shortenedBal, setShortenedBal] = useState('');
  const [balDisp, setBalDisp] = useState(0);
  const { Moralis } = useMoralis();
  const { checkUser } = useCryptoAuth();

  useEffect(() => {
    if (authedUser.authed) {
      const userBalIsolate = authedUser.userBalance.substring(0, 6);
      setShortenedBal(userBalIsolate.concat(' Matic'));
    }
  }, [authedUser]);

  useEffect(() => {
    if (authedUser.authed) {
      document.getElementById('login-btn').disabled = true;
      // Isolates the first several charactors of user's address
      const addressBegining = authedUser.userAddress.substring(0, 4);
      // Isolates the last several charactors of user's address
      const addressEnd = authedUser.userAddress.substring(37, 41);
      // Sets the user's shortened address to be displayed
      setShortenedAddr(
        addressBegining.concat('.'.padEnd(6, '.')).concat(addressEnd)
      );
    } else {
      document.getElementById('login-btn').disabled = false;
    }
  }, [authedUser]);

  const login = async () => {
    // Disables button after clicked once
    document.getElementById('login-btn').disabled = true;
    const ethers = Moralis.web3Library;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    setAuthedUser(checkUser());
    document.getElementById('login-btn').disabled = false;
  };

  const toggleBalDisplay = () => {
    balDisp === 1 ? setBalDisp(0) : setBalDisp(1);
  };

  return (
    <div className="login-container">
      <button id="login-btn" className="login-btn" onClick={login}>
        {authedUser.authed ? shortenedAddr : 'login'}
      </button>
      <button className="login-btn" onClick={toggleBalDisplay}>
        {balDisp === 0 ? shortenedBal : 'Balance'}
      </button>
    </div>
  );
};

export default CryptoLogin;
