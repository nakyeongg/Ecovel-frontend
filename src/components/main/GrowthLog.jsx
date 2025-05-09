import React from 'react';
import styled from 'styled-components';
import tree from '../../assets/icons/main/tree.png';


export const GrowthLog = () => {
    return (
        <Wrapper>
            <GraphWrapper>
                <GraphBack>
                    <Graph />
                </GraphBack>
                <p>I saved 0.0kg of carbon</p>
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