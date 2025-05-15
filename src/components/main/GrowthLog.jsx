import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import seed from '../../assets/icons/main/seed.png';
import sprout from '../../assets/icons/main/sprout.png';
import flowerpot from '../../assets/icons/main/flowerpot.png';
import tree from '../../assets/icons/main/tree.png';
import crown from '../../assets/icons/main/crown.png';
import mainAxios from './../../apis/mainAxios';

export const GrowthLog = ({ userId }) => {
    const [totalCarbonSaved, setTotalCarbonSaved] = useState(0);
    const [growthStage, setGrowthStage] = useState('씨앗');
    const [pointStatus, setPointStatus] = useState(0); // 포인트 현황
    const [totalPoint, setTotalPoint] = useState(5); // 이번 growthStage에서의 최대 포인트

    const handleGrowthLog = async () => {
        try {
            console.log('userId: ', userId);
            const response = await mainAxios.get(`/growth/log?userId=${userId}`);
            console.log('성장 로그 요청 성공', response);
            setTotalCarbonSaved(response.data.result.totalCarbonSaved);
            setGrowthStage(response.data.result.growthStage);
            const tempPointStatus = response.data.result.totalCarbonSaved + response.data.result.totalMissionSuccessCount + response.data.result.totalQuizSuccessCount>=10 ? 10 : response.data.result.totalCarbonSaved + response.data.result.totalMissionSuccessCount + response.data.result.totalQuizSuccessCount;
            setPointStatus(tempPointStatus);
            console.log('포인트 합계: ', tempPointStatus);
            if (tempPointStatus < 5) {
                setTotalPoint(5);
            } else {
                setTotalPoint(10);
            }
        } catch(error) {
            console.log('성장 로그 요청 실패', error);
        }
    }

    useEffect(() => {
        if (userId) {
            handleGrowthLog();
        }
    } ,[userId])

    return (
        <Wrapper>
            <GraphWrapper>
                <GraphBack>
                    <Graph width={(pointStatus/totalPoint)*100}/>
                </GraphBack>
                <p>I saved {totalCarbonSaved}kg of carbon</p>
            </GraphWrapper>
            {growthStage==="씨앗" ? (
                <Image src={seed} />
            ) : growthStage==="새싹" ? (
                <Image src={sprout} />
            ) : growthStage==="성장기" ? (
                <Image src={tree} />
            ) : null}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 150px;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

const GraphWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const GraphBack = styled.div`
    background-color: #353030;
    width: 180px;
    height: 15px;
`

const Graph = styled.div`
    background-color: #2DCF73;
    width: ${({width}) => width}%;
    height: 15px;
`

const Image = styled.img`
    max-height: 150px;
`