import { useLogin } from '../../authentication/CryptoLoginLogic';

const CryptoLogin = () => {
  const { login } = useLogin();
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default CryptoLogin;
