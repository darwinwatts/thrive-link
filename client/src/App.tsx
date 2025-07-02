import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CheckIn from './components/CheckIn';
import ResourceFeed from './components/ResourceFeed';
import MicroChallenges from './components/MicroChallenges';
import SupportCircle from './components/SupportCircle';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/resources" element={<ResourceFeed />} />
        <Route path="/challenges" element={<MicroChallenges />} />
        <Route path="/support" element={<SupportCircle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
