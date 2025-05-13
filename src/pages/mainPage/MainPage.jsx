import React, { useState, useEffect } from 'react';
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
import mainAxios from './../../apis/mainAxios';

const MainPage = () => {
    const [userId, setUserId] = useState();

    const handleId = async () => {
        try {
            const response = await mainAxios.get('/api/users/me');
            console.log('유저 정보 요청 성공', response);
            setUserId(response.data.result.id);
        } catch(error) {
            console.log('유저 정보 요청 실패', error);
        }
    }

    useEffect(() => {
        handleId();
    }, [])

    return (
        <Layout>
            <Header />
            {userId!==undefined && (
                <>
                    <GrowthLog userId={userId}/>
                    <Quiz userId={userId}/>
                </>
            )}
            <S.ButtonWrapper>
                <S.LargeButton to='/travel/region'>
                    <S.Title>Travel</S.Title>
                    <S.LargeIcon src={travel} />
                </S.LargeButton>        
                <S.ColumnWrapper>
                    <S.SmallButton to='/report/list'>
                        <S.Title>Report</S.Title>
                        <S.SmallIcon src={report} />
                    </S.SmallButton>
                    <S.SmallButton to='/mission/list'>
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
