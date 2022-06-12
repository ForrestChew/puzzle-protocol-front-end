import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar';
import StagnantChallenges from './pages/stagnant-challenges/StagnantChallenges';
import ProposeChallenges from './pages/propose-challenges/ProposeChallenges';
import CreateChallenges from './pages/create-challenges/CreateChallenges';
import Home from './pages/home/Home';
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
      </Routes>
    </div>
  );
};

export default App;
