import React from 'react';
import * as S from "./MainPage.styeld";
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';
import { Quiz } from '../../components/main/Quiz';
import { GrowthLog } from '../../components/main/GrowthLog';
import travel from '../../assets/icons/main/travel.png';
import report from '../../assets/icons/main/report.png';
import mission from '../../assets/icons/main/mission.png';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <Layout>
            <Header />
            <GrowthLog />
            <Quiz/>
            <S.ButtonWrapper>
                <S.LargeButton to='/'>
                    <S.Title>Travel</S.Title>
                    <S.LargeIcon src={travel} />
                </S.LargeButton>        
                <S.ColumnWrapper>
                    <S.SmallButton to='/'>
                        <S.Title>Report</S.Title>
                        <S.SmallIcon src={report} />
                    </S.SmallButton>
                    <S.SmallButton to='/'>
                        <S.Title>Mission</S.Title>
                        <S.SmallIcon src={mission} />
                    </S.SmallButton>
                </S.ColumnWrapper>
            </S.ButtonWrapper>
            <Footer />
        </Layout>
    )
}

export default MainPage
