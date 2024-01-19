
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Createaccount from './components/createaccount.component/createaccount';
import Dashboard from './components/dashboard.component/dashboard';
import Login from './components/login.component/login';
import Firstslide from './components/onboardingscreens.component/firstslide.component/firstslide';
import Homepage from './components/onboardingscreens.component/homepage.component/homepage';
import './index.css';
import Createpoll from "./components/createpoll.component/createpoll";
import CreateAPoll from "./components/createapoll.component/createapoll";
import Polluploads from "./components/polluploads.component/polluploads";
import Uploadfiles from "./components/uploadfiles.component/uploadfiles";
import PollSuccess from "./components/pollsuccespage.component/pollsuccesspage";
import Joinavote from "./components/joinavote.component/joinavote";
import Votingevents from "./components/votingevents.component/votingevents";
import Ongoingvotesdetails from "./components/ongoingvotesdetail.component/ongoingvotesdetails";
import Candidatesdetails from "./components/candidatedetails.component/candidatesdetails";
import Notfound from "./components/notfound.component/notfound";
import Votesuccess from "./components/votesuccesspage.component/votesuccess";

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
          <Route
              path="/succespage"
              element={
                <Dashboard>
                  <PollSuccess />
                </Dashboard>
              }
            />
          <Route
              path="/joinavote"
              element={
                <Dashboard>
                  <Joinavote />
                </Dashboard>
              }
            />
          <Route
              path="/nigeria2023"
              element={
                <Dashboard>
                  <Votingevents />
                </Dashboard>
              }
            />
          <Route
              path="/ongoingvote"
              element={
                <Dashboard>
                  <Ongoingvotesdetails />
                </Dashboard>
              }
            />
          <Route
              path="/ongoingvote/:id"
              element={
                <Dashboard>
                  <Candidatesdetails />
                </Dashboard>
              }
            />
          <Route
              path="/votesuccess"
              element={
                <Dashboard>
                  <Votesuccess />
                </Dashboard>
              }
            />
          <Route path="*" element={<Notfound />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
