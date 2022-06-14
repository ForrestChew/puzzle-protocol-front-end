import { useEffect, useContext } from 'react';
import { useContractInteractions } from '../../hooks/useContractInteractions';
import { useChallenges } from '../../hooks/useChallenges';
import { UserContext } from '../../components/UserContextProvider';

const PlayChallenge = () => {
  //   const [authedUser, setAuthedUser] = useContext(UserContext);
  //   const { getUserChallenges } = useContractInteractions();
  //   const activeChallenges = useChallenges(true);
  //   useEffect(() => {
  //     const test = async () => {
  //       try {
  //         activeChallenges.forEach(async (challenge, idx) => {
  //           console.log(challenge);
  //           const userChallenges = await getUserChallenges(
  //             activeChallenges[idx].attributes.uid
  //           );
  //           if (activeChallenges.challenger === authedUser.userAddress) {
  //             console.log(activeChallenges);
  //           }
  //         });
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //     test();
  //   }, []);
  //   return <div>PlayChallenge</div>;
};

export default PlayChallenge;
