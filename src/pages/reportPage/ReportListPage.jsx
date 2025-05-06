import React from 'react';
import * as S from './ReportListPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import { reportListData } from '../../constant/reportListData';
import next from '../../assets/icons/report/next.svg';
import cloud from '../../assets/images/cloud.png';
import { Link } from 'react-router-dom';

const ReportListPage = () => {
    return (
        <Layout>
            <Header />
            <S.Wrapper>
                {reportListData.map((report, index) => (
                    <Link to='/report/detail'>
                        <S.ReportWrapper>
                            <S.Top>
                                <S.Date>2025-04-08</S.Date>
                                <S.PlaceWrapper>
                                    <S.Place>Jeju island</S.Place>
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
