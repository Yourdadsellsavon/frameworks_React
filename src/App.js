import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Media from './pages/media';


function App() {
  return (
  <Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/media' element={<Media/>} />
	</Routes>
	</Router>
  );
}

export default App;
