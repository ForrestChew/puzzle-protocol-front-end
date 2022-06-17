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

  const startSChallenge = async (challengeId, wager) => {
    await Moralis.enableWeb3();
    const challengeOptions = {
      contractAddress: contractAddress,
      abi: contractAbi,
      functionName: 'startChallenge',
      chain: 80001,
      msgValue: wager,
      params: {
        _challengeId: challengeId,
      },
    };
    const txReceipt = await Moralis.executeFunction(challengeOptions);
    return txReceipt;
  };

  const getUserChallenges = async (challengeId) => {
    await Moralis.enableWeb3();
    const challengeOptions = {
      contractAddress: contractAddress,
      abi: contractAbi,
      functionName: 'getChallengesById',
      chain: 80001,
      params: {
        _challengeId: challengeId,
      },
    };
    const txReceipt = await Moralis.executeFunction(challengeOptions);
    return txReceipt;
  };

  // Hook called when a user submits a guess to the challenge.
  const submitAnswer = async (challengeId, guess) => {
    await Moralis.enableWeb3();
    const challengeOptions = {
      contractAddress: contractAddress,
      abi: contractAbi,
      functionName: 'submitAnswer',
      chain: 80001,
      params: {
        _challengeId: challengeId,
        _guess: guess,
      },
    };
    const txReceipt = await Moralis.executeFunction(challengeOptions);
    return txReceipt;
  };

  const fleeChallenge = async (challengeId) => {
    await Moralis.enableWeb3();
    const challengeOptions = {
      contractAddress: contractAddress,
      abi: contractAbi,
      functionName: 'fleeChallenge',
      chain: 80001,
      params: {
        _challengeId: challengeId,
      },
    };
    const txReceipt = await Moralis.executeFunction(challengeOptions);
    return txReceipt;
  };

  return {
    contractInstanceWithSigner,
    contractInstanceWithProvider,
    startSChallenge,
    getUserChallenges,
    submitAnswer,
    fleeChallenge,
  };
};
