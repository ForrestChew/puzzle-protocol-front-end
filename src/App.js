import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar';
import Home from './pages/home/Home';
import StagnantChallenges from './pages/stagnant-challenges/StagnantChallenges';
import ProposeChallenges from './pages/propose-challenges/ProposeChallenges';
import CreateChallenges from './pages/create-challenges/CreateChallenges';
import PlayChallenge from './pages/play-challenge/PlayChallenge';
const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/challenges/stagnant-challenges"
          element={<StagnantChallenges />}
        />
        <Route
          path="/challenges/propose-challenges"
          element={<ProposeChallenges />}
        />
        <Route
          path="/challenges/create-challenges"
          element={<CreateChallenges />}
        />
        <Route path="/active-challenges" element={<PlayChallenge />} />
      </Routes>
    </div>
  );
};

export default App;
