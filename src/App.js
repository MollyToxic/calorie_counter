import Main from "./pages/Main";
import Entrance from "./pages/Entrance";
import {Routes, Route} from 'react-router-dom';
import "./styles/App.css";
import Training from "./pages/Training";
import ReviewToday from "./pages/ReviewToday";
import Food from "./pages/Food";
import Registration from "./pages/Registration";
import Report from "./pages/Report";


function App() {
  return(
    <Routes>
      <Route path="/"element={<Entrance/>}/>
      <Route path="/main" element={<Main />} />
      <Route path="/review_today" element={<ReviewToday/>} />
      <Route path="/training" element={<Training/>}/>
      <Route path="/food" element={<Food />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/report" element={<Report />} />
      {/* <Route path="*" element={NotifoundPage}/> */}
    </Routes>
  )
}

export default App;
