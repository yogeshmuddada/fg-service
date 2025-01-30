import './App.css';
//import Background from './Components/Background';
import Home from './Components/Home';
//import ArticleForm from './Components/ArticleForm';

//import { HashRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<ArticleForm/>} />
      </Routes>
    </Router> */}
    
    <Home></Home>
    
    </div>
  );
}

export default App;
