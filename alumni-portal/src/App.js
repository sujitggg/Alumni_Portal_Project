import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import EventList from './pages/EventList';
import News from './pages/News';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './pages/UserProfile';
import Departments from './pages/Departments';
import AlumniData from './pages/AlumniData';
import RegistrationForm from './pages/RegistrationForm';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/eventlist" element={<EventList />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/header" element={<Header />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/userprofile" element={<UserProfile/>} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/registrationform" element={<RegistrationForm />} />
                <Route path="/alumnidata" element={<AlumniData />} />
                
              
            </Routes>
        </Router>
    );
}

export default App;
