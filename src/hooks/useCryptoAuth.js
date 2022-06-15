import { useMoralis } from 'react-moralis';

export const useCryptoAuth = () => {
  const { Moralis } = useMoralis();

  const checkUser = async () => {
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

  return { checkUser };
};
