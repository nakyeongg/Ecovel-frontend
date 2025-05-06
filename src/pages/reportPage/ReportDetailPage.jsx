import React, { useState } from 'react';
import * as S from './ReportDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import CarbonLineChart from '../../components/report/CarbonLineChart';
import magnifier from '../../assets/icons/report/magnifier.png';
import tree from '../../assets/icons/report/tree.png';
import treeLight from '../../assets/icons/report/treeLight.png';

const ReportDetailPage = () => {
    const [ecoScore, setEcoScore] = useState(6);

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

    return (
        <Layout>
            <Header />
            <S.Title>Carbon Footprint</S.Title>
            <S.RowWrapper>
                <S.Title>Reduction</S.Title>
                <S.Magnifier src={magnifier}/>
            </S.RowWrapper>
            <S.UnitWrapper>
                <S.ReducedCarbon>8</S.ReducedCarbon>
                <S.Unit>kg CO₂</S.Unit>
            </S.UnitWrapper>
            <CarbonLineChart/>
            <S.ScoreWrapper>
                {renderTreeIcons()}
                {renderTreeLightIcons()}
            </S.ScoreWrapper>
            <S.Score>Your Eco-Friendly Score : {ecoScore}/10</S.Score>
        </Layout>
    )
}

export default ReportDetailPage;
