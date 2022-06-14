import { useMoralis } from 'react-moralis';
import {
  contractAddress,
  contractAbi,
} from '../contract-info/contract-info.js';

export const useContractInteractions = () => {
  const { Moralis } = useMoralis();
  // Returns read only instance of smart contract attached to the current signer.
  const contractInstanceWithProvider = async () => {
    const provider = Moralis.web3;
    const ethers = Moralis.web3Library;
    const puzzleProtoInstanceWithProvider = new ethers.Contract(
      contractAddress,
      contractAbi,
      provider
    );
    return puzzleProtoInstanceWithProvider;
  };

  // Returns read + write instance of smart contract attached to the current signer.
  const contractInstanceWithSigner = () => {
    const ethers = Moralis.web3Library;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const puzzleProtoInstanceWithSigner = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    return puzzleProtoInstanceWithSigner;
  };

  const startSChallenge = async (challengeId) => {
    await Moralis.enableWeb3();
    const challengeOptions = {
      contractAddress: contractAddress,
      abi: contractAbi,
      functionName: 'startChallenge',
      chain: 80001,
      msgValue: 1,
      params: {
        _challengeId: challengeId,
      },
    };
    const txReceipt = await Moralis.executeFunction(challengeOptions);
    console.log(txReceipt);
  };

  return {
    contractInstanceWithSigner,
    contractInstanceWithProvider,
    startSChallenge,
  };
};
