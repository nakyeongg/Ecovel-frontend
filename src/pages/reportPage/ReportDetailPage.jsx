import React, { useEffect, useState } from 'react';
import * as S from './ReportDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import CarbonLineChart from '../../components/report/CarbonLineChart';
import magnifier from '../../assets/icons/report/magnifier.png';
import tree from '../../assets/icons/report/tree.png';
import treeLight from '../../assets/icons/report/treeLight.png';
import { Link, useParams } from 'react-router-dom';
import mainAxios from './../../apis/mainAxios';

const ReportDetailPage = () => {
    const { id } = useParams();
    const [ecoScore, setEcoScore] = useState();
    const [reducedCarbon, setReducedCarbon] = useState(0);
    const [reportDetailData, setReportDetailData] = useState();

    const handleReportDetail = async () => {
        try {
            const response = await mainAxios.get(`/report/${id}`);
            console.log('리포트 디테일 응답 성공', response);
            setEcoScore(response.data.result.ecoScore);
            setReducedCarbon(response.data.result.reducedCarbon);
            setReportDetailData(response.data.result.details);
        } catch(error) {
            console.log('리포트 디테일 응답 에러', error);
        }
    }

    const renderTreeIcons = () => {
        return Array.from({ length: ecoScore }).map((_, index) => (
            <S.TreeIcon src={tree} key={index} />
        ));
    };
    const renderTreeLightIcons = () => {
        return Array.from({ length: 10-ecoScore }).map((_, index) => (
            <S.TreeIcon src={treeLight} key={index} />
        ));
    };

    useEffect(() => {
        handleReportDetail();
    },[])

    return (
        <Layout>
            <Header />
            <S.Title>Carbon Footprint</S.Title>
            <S.RowWrapper>
                <S.Title>Reduction</S.Title>
                <Link to={`/report/info/${id}`}>
                    <S.Magnifier src={magnifier}/>
                </Link>
            </S.RowWrapper>
            <S.UnitWrapper>
                <S.ReducedCarbon>{reducedCarbon}</S.ReducedCarbon>
                <S.Unit>kg CO₂</S.Unit>
            </S.UnitWrapper>
            <CarbonLineChart data={reportDetailData}/>
            <S.ScoreWrapper>
                {renderTreeIcons()}
                {renderTreeLightIcons()}
            </S.ScoreWrapper>
            <S.Score>Your Eco-Friendly Score : {ecoScore}/10</S.Score>
        </Layout>
    )
}

export default ReportDetailPage;
