import Header from './Header';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TinderCards from './Pages/TinderCards';
import Chats from './Pages/Chats';
import ChatScreen from './Pages/ChatScreen';
import SwipeButtons from './Pages/SwipeButtons';
function App() {
  return (
    <div className="App">

      {/* Header */}
      
      <Router>

        <Routes>
          <Route path="/chat/:person" element={<><Header backButton="/chat" /><ChatScreen/></>}/>
          <Route path="/chat" element={<><Header backButton="/" /><Chats/></>}/>
          <Route path="/" element={<><Header /><TinderCards/><SwipeButtons/></>}/>
          
        </Routes>
        {/* Tinder Cards */}
        {/* Buttons below tinder cards */}

        {/* Chat screen */}
        {/* Individual chat screen */}
      </Router>
      
    </div>
  );
}

export default App;
