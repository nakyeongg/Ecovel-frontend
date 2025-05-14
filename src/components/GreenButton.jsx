import React from 'react';
import styled from 'styled-components';

export const GreenButton = ({ text, marginBottom=0, disabled, onClick }) => {
    return (
        <Wrapper disabled={disabled} onClick={onClick} $marginBottom={marginBottom}>
            {text}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    background-color: #2DCF73;
    width: 100%;
    color: #FFFFFF;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin-bottom: ${({marginBottom}) => marginBottom}px;

    &:disabled {
        background-color: #D9D9D9;
        cursor: default;
    }
`

