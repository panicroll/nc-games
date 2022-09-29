import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Reviews from './components/Reviews';
import IndividualReview from './components/IndividualReview'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/categories/:category" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<IndividualReview />}/>
      </Routes>
    </div>
  );
}

export default App;
