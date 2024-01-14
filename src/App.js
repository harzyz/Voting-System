
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
import Createpoll from "./components/createpoll.component/createpoll";
import CreateAPoll from "./components/createapoll.component/createapoll";
import Polluploads from "./components/polluploads.component/polluploads";
import Uploadfiles from "./components/uploadfiles.component/uploadfiles";

function App() {
  return (
    <div className='contain'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signup"  element={<Createaccount />} />
          <Route path="/onboarding"  element={<Firstslide />} />
          {/* <Route path="/dashboard"  element={<Dashboard />} /> */}
          <Route
              path="/createpoll"
              element={
                <Dashboard>
                  <Createpoll />
                </Dashboard>
              }
            />
          <Route
              path="/createapoll"
              element={
                <Dashboard>
                  <CreateAPoll />
                </Dashboard>
              }
            />
          <Route
              path="/pollupload"
              element={
                <Dashboard>
                  <Polluploads />
                </Dashboard>
              }
            />
          <Route
              path="/uploadfiles"
              element={
                <Dashboard>
                  <Uploadfiles />
                </Dashboard>
              }
            />
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
