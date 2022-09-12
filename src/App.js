import Header from './Header';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TinderCards from './Pages/TinderCards';
import Chat from './Pages/Chat';
function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />  
      <Router>
        <Routes>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/" element={<TinderCards/>}/>
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
