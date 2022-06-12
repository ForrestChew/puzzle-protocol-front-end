import { useMoralis } from 'react-moralis';
import {
  contractAddress,
  contractAbi,
} from '../contract-interactions/contract-info.js';

export const useGetContractInstance = () => {
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
  const contractInstanceWithSigner = async () => {
    const provider = Moralis.web3;
    const signer = provider.getSigner();
    const ethers = Moralis.web3Library;
    const puzzleProtoInstanceWithSigner = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    return puzzleProtoInstanceWithSigner;
  };
  return { contractInstanceWithSigner, contractInstanceWithProvider };
};
