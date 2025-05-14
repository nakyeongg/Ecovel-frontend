import React, { useEffect, useState } from 'react';
import * as S from './ReportInfoPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import { carbonData } from '../../constant/carbonData';
import miniTree from '../../assets/icons/report/miniTree.png';
import wind from '../../assets/icons/report/wind.svg';
import { useParams } from 'react-router-dom';
import mainAxios from '../../apis/mainAxios';

const ReportInfoPage = () => {
    const { id } = useParams();
    const [reducedCarbon, setReducedCarbon] = useState(0);

    const handleReportDetail = async () => {
        try {
            const response = await mainAxios.get(`/report/${id}`);
            console.log('리포트 디테일 응답 성공', response);
            setReducedCarbon(response.data.result.reducedCarbon);
        } catch(error) {
            console.log('리포트 디테일 응답 에러', error);
        }
    }

    const handleIndex = (value) => {
        if (value >= 100) return 4;
        if (value >= 60) return 3;
        if (value >= 30) return 2;
        if (value >= 10) return 1;
        if (value >= 0) return 0;
        return -1;
    }

    const activeIndex = handleIndex(reducedCarbon);
    console.log('activeIndex', activeIndex);

    useEffect(() => {
        handleReportDetail();
    }, [])

    return (
        <Layout>
            <Header />
            {carbonData.map((data, index) => (
                <S.Wrapper key={index} active={activeIndex === index}>
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
