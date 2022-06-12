import { CryptoAuth } from '../../authentication/CryptoAuth';
const CryptoLogin = () => {
  const { authedAccount, login, isAuthenticated, user, cryptoLogout } =
    CryptoAuth();

  return (
    <div>
      {authedAccount ? (
        <button onClick={cryptoLogout}>
          {authedAccount ? authedAccount : 'Logout'}
        </button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default CryptoLogin;
