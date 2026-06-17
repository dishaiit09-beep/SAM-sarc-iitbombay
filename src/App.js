import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App" style={{paddingTop: '0px'}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species" element={<Species />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scenes" element={<Comingsoon pageName="Scenes" />} />
          <Route path="/map" element={<Comingsoon pageName="Map" />} />
          <Route path="/social" element={<Comingsoon pageName="Social" />} />
        </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
