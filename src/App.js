import Main from "./pages/Main";
import Entrance from "./pages/Entrance";
import {Routes, Route} from 'react-router-dom';
import "./styles/App.css";
import ReviewToday from "./pages/ReviewToday";
import Food from "./pages/Food";
import Registration from "./pages/Registration";
import Report from "./pages/Report";
import Traing from "./pages/Traing";
import Editing from "./pages/Editing";
import ApplicationHelp from "./pages/ApplicationHelp";
import ComponentHelp from "./pages/СomponentHelp";


function App() {
  return(
    <Routes>
      <Route path="/"element={<Entrance/>}/>
      <Route path="/main" element={<Main />} />
      <Route path="/review_today" element={<ReviewToday/>} />
      <Route path="/traing" element={<Traing/>}/>
      <Route path="/food" element={<Food />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/report" element={<Report />} />
      <Route path="/editing" element={<Editing />} />
      <Route path="/app_help" element={<ApplicationHelp />} />
      <Route path="/component_help" element={<ComponentHelp />} />
      {/* <Route path="*" element={NotifoundPage}/> */}
    </Routes>
  )
}

export default App;
