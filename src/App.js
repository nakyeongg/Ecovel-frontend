import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Onboarding from './pages/mainPage/Onboarding';
import LoginPage from './pages/userPage/LoginPage';
import SignupPage from './pages/userPage/SignupPage';
import WelcomePage from './pages/userPage/WelcomPage';
import MainPage from './pages/mainPage/MainPage';
import RegionOptionPage from './pages/travelPage/RegionOptionPage';
import DistrictOptionPage from './pages/travelPage/DistrictOptionPage';
import TravelStyleOptionPage from './pages/travelPage/TravelStyleOptionPage';
import TravelDetailPage from './pages/travelPage/TravelDetailPage';
import BookmarkPage from './pages/travelPage/BookmarkPage';
import ReportListPage from './pages/reportPage/ReportListPage';
import ReportDetailPage from './pages/reportPage/ReportDetailPage';
import ReportInfoPage from './pages/reportPage/ReportInfoPage';
import MyPage from './pages/userPage/MyPage';

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Onboarding />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/signup/success' element={<WelcomePage />} />
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/travel/region' element={<RegionOptionPage />} />
                    <Route path='/travel/district' element={<DistrictOptionPage />} />
                    <Route path='/travel/style' element={<TravelStyleOptionPage />} />
                    <Route path='/travel/detail' element={<TravelDetailPage />} />
                    <Route path='/bookmark' element={<BookmarkPage />} />
                    <Route path='/report/list' element={<ReportListPage />} />
                    <Route path='/report/detail' element={<ReportDetailPage />} />
                    <Route path='/report/info' element={<ReportInfoPage />} />
                    <Route path='/mypage' element={<MyPage />} />
                </Routes>
        </BrowserRouter>
    )
}

export default App
