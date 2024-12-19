import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './component/Border/Navbar'; 
import Login from './component/login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './component/Border/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import DashboardUser from './component/Dashboards/UserDashboard';
import Dashboard from './component/Dashboards/Admin/AdminDashboard';
import Team from './component/Dashboards/Admin/team';
import Offre from './component/Dashboards/Admin/offre';
import GraduateProfile from './component/Dashboards/Cv'
import Quiz from './component/Dashboards/Quizz';
import Alloffre from './component/AfficheOffre';
import CourseComponent from './component/Dashboards/Usercours'
import MachineLearning from './component/Dashboards/video/Machinelearning';
import Web from './component/Dashboards/video/Dev';
import AllCv from './component/Dashboards/Admin/AfficheCv'
import SettingsPage from './component/Dashboards/SettingUser';
import QuizLandingPage from './component/Dashboards/Admin/Createquiz';
import QuizBuilder from './component/Dashboards/Admin/Allquiz';
import AfficheQuiz from './component/Dashboards/Affichequiz';
import  OffreUser from './component/Dashboards/OffreJob';


function App() {


  return (
    <BrowserRouter>
      <Navbar  /> 
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
       
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/dashboard-user" element={<DashboardUser />} />
            <Route path="/dashboard-admin" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/offre" element={<Offre />} />
            <Route path="/cv" element={<GraduateProfile />} />
            <Route path="/all-cv" element={<AllCv />} />
            <Route path="/quiz/:quizId" element={<Quiz />} />
            <Route path="/alloffre" element={<Alloffre />} />
            <Route path="/cours" element={<CourseComponent />} />
            <Route path="/categories/ml" element={<MachineLearning />} />
            <Route path="/categories/web-dev" element={<Web />} />
            <Route path="/setting-user" element={<SettingsPage />} />
            <Route path="/admin-quiz" element={<QuizLandingPage />} />
            <Route path="/create-quiz" element={<QuizBuilder />} />
            <Route path="/Affiche-quiz" element={<AfficheQuiz />} />
            <Route path="/offre-job" element={< OffreUser />} />










 





          </Routes>
        </div>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;