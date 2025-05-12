import React from 'react';
import styled from 'styled-components';

export const MapLayout = ({ children }) => {
    return (
        <Wrapper>{ children }</Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
    min-height: 100vh;
    overflow-y: auto;
    min-width: 393px;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`