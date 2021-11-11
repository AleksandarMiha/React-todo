import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Users from "./view/Users";
import Navbar from './components/Navbar';
import NewUser from './view/NewUser';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/new-user" element={<NewUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
