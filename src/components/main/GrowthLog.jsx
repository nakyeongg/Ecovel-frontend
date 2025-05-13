import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import seed from '../../assets/icons/main/seed.png';
import sprout from '../../assets/icons/main/sprout.png';
import flowerpot from '../../assets/icons/main/flowerpot.png';
import tree from '../../assets/icons/main/tree.png';
import crown from '../../assets/icons/main/crown.png';
import mainAxios from './../../apis/mainAxios';

export const GrowthLog = ({ userId }) => {
    const [growthData, setGrowthData] = useState();
    const [totalCarbonSaved, setTotalCarbonSaved] = useState(125.0);

    const handleGrowthLog = async (userId) => {
        try {
            const response = await mainAxios.get(`/growth/log?userId=${userId}`);
            console.log('성장 로그 요청 성공', response);
            setGrowthData(response.result);
            setTotalCarbonSaved(response.result.totalCarbonSaved);
        } catch(error) {
            console.log('성장 로그 요청 실패', error);
        }
    }

    useEffect(() => {
        handleGrowthLog();
    } ,[])

    return (
        <Wrapper>
            <GraphWrapper>
                <GraphBack>
                    <Graph />
                </GraphBack>
                <p>I saved {totalCarbonSaved}kg of carbon</p>
            </GraphWrapper>
            <Image src={tree} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 150px;
    width: 100%;
    margin-top: 30px;
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
    width: 110px;
    height: 15px;
`

const Image = styled.img`
    max-height: 150px;
`