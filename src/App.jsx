import "./App.css";
// import Header from "./OverviewChart2.jsx/Header";
import Sidebar from "./Components/Sidebar";
import Overview from "./Pages/Overview";

import Statics from "./Pages/Statics";
import Profile from "./Pages/Profile";
import Contect from "./Components/Contect";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import EntrepreneurialSkillsGauge from "./Components/UpgradeCard";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar  />
          <div className=" md:ml-[300px] w-full">
            <Header />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/statistics" element={<Statics />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Contect />
            <Footer />
          </div>
        </div>
      </Router>
      {/* <EntrepreneurialSkillsGauge /> */}
    </>
  );
}

export default App;
