import { useGetContractInstance } from '../Utils/useGetContractInstance';
import { contractAddress, contractAbi } from './contract-info';
export const useStartChallenge = () => {
  const { contractInstanceWithSigner } = useGetContractInstance();

  const startChallenge = async (challengeId) => {
    const challengeOptions = {
      contractAddress,
      abi: contractAbi,
      chain: 80001,
      functionName: 'startChallenge',
      params: {
        _challengeId: challengeId,
      },
    };
    await contractInstanceWithSigner.startChallenge(challengeOptions);
  };
  return startChallenge;
};
