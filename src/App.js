import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Onboarding from './pages/mainPage/Onboarding';
import LoginPage from './pages/userPage/LoginPage';
import SignupPage from './pages/userPage/SignupPage';
import WelcomePage from './pages/userPage/WelcomPage';
import Main from './pages/mainPage/MainPage';

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Onboarding />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/signup/success' element={<WelcomePage />} />
                    <Route path='/main' element={<Main />} />
                </Routes>
        </BrowserRouter>
    )
}

export default App
