import React, { useState, useEffect } from 'react';
import * as S from './ReportListPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import next from '../../assets/icons/report/next.svg';
import cloud from '../../assets/images/cloud.png';
import { Link } from 'react-router-dom';
import mainAxios from './../../apis/mainAxios';

const ReportListPage = () => {
    const [reportListData, setReportListData] = useState([]);

    const handleReportList = async () => {
        try {
            const response = await mainAxios.get('/report/list');
            console.log('리포트 목록 요청 성공', response);
            setReportListData(response.data.result);
        } catch(error) {
            console.log('리포트 목록 요청 실패', error);
        }
    }

    useEffect(() => {
        handleReportList();
    },[])

    return (
        <Layout>
            <Header />
            <S.Wrapper>
                {reportListData.map((report, index) => (
                    <Link to={`/report/detail/${report.planId}`} key={index}>
                        <S.ReportWrapper>
                            <S.Top>
                                <S.Date>{report.startDate}</S.Date>
                                <S.PlaceWrapper>
                                    <S.Place>{report.city}</S.Place>
                                    <S.NextIcon src={next}/>
                                </S.PlaceWrapper>
                            </S.Top>
                            <S.Bottom>
                                <S.DescWrapper>
                                    <S.Desc>
                                        Total Carbon Emissions<br />
                                        → {report.reducedCarbon}kg CO₂<br />
                                    </S.Desc>
                                    <S.Desc>
                                        Eco-Friendly Score<br />
                                        → {report.ecoScore}/10
                                    </S.Desc>
                                </S.DescWrapper>
                                <S.CloudImage src={cloud}/>
                            </S.Bottom>
                        </S.ReportWrapper>
                    </Link>
                ))}
            </S.Wrapper>
        </Layout>
    )
}

export default ReportListPage;
