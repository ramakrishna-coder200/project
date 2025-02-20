// App.tsx or your main routing file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import './App.css';
import CommonLayout from './Components/CommonLayout';

const App = () => {
  return (
    <Router>
            <CommonLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </CommonLayout>
    </Router>
  );
};

export default App;
