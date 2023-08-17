import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AllCountries from './components/AllCountries/AllCountries';
import CountryInfo from './components/CountryInfo/CountryInfo';


function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
      </div>
        <div className="container">
        <Router>
          <Routes>
          <Route path="/allcountries" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </Router>
        </div>
      </>  
  );

}

export default App;
