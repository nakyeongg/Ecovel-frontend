import React from 'react';
import * as S from './ReportInfoPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import { carbonData } from '../../constant/carbonData';
import miniTree from '../../assets/icons/report/miniTree.png';
import wind from '../../assets/icons/report/wind.svg';


const ReportInfoPage = () => {
    return (
        <Layout>
            <Header />
            {carbonData.map((data, index) => (
                <S.Wrapper>
                    <S.Top>
                        <S.Amount>{data.amount}</S.Amount>
                        <S.TreeWrapper>
                            <S.TreeIcon src={miniTree}/>
                            <S.TreeEffect>
                                Equivalent to <br />
                                {data.effect}
                            </S.TreeEffect>
                        </S.TreeWrapper>
                    </S.Top>
                    <S.Air>
                        <S.WindIcon src={wind}/>
                        <S.AirEffect>{data.purification}</S.AirEffect>
                    </S.Air>
                </S.Wrapper>
            ))}
        </Layout>
    )
}

export default ReportInfoPage;
