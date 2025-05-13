import React from 'react';
import styled from 'styled-components';

export const ModalLayout = ({ children }) => {
    return (
        <Wrapper>{ children }</Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    border-radius: 25px;
    width: 330px;
    height: 580px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.25);
`