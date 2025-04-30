import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Onboarding from './pages/mainPage/Onboarding';
import LoginPage from './pages/userPage/LoginPage';
import Main from './pages/mainPage/MainPage';

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Onboarding />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/main' element={<Main />} />
                </Routes>
        </BrowserRouter>
    )
}

export default App
