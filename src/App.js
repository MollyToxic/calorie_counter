import Main from "./pages/Main";
import Entrance from "./pages/Entrance";
import {Routes, Route} from 'react-router-dom';
import "./styles/App.css";


function App() {
  return(
    <Routes>
      <Route path="/"element={<Entrance/>}/>
      <Route path="/main" element={<Main />} />
      {/* <Route path="*" element={NotifoundPage}/> */}
    </Routes>
  )
}

export default App;
