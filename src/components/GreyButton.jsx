import React from 'react';
import styled from 'styled-components';

export const GreyButton = ({ text }) => {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    color: #757F8C;
    margin-top: 15px;
    font-size: 16px;
`
