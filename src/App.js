
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Createaccount from './components/createaccount.component/createaccount';
import Dashboard from './components/dashboard.component/dashboard';
import Login from './components/login.component/login';
import Navbar from './components/navbar.component/navbar';
import Firstslide from './components/onboardingscreens.component/firstslide.component/firstslide';
import Homepage from './components/onboardingscreens.component/homepage.component/homepage';
import Phoneverication from './components/phoneverification.component/phoneverication';
import Success from './components/successpage.component/success';
import './index.css';

function App() {
  return (
    <div className='contain'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signup"  element={<Createaccount />} />
          <Route path="/onboarding"  element={<Firstslide />} />
        </Routes>
      </Router>
      {/* <Navbar />
      <Homepage />
      <Firstslide />
      <Createaccount />
      <Login />
      <Phoneverication />
      <Success />
      <Dashboard /> */}
    </div>
  );
}

export default App;
