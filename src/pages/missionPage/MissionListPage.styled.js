import styled from "styled-components";

export const Guide = styled.h4`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    width: 292px;
    margin-bottom: 20px;
`

export const OptionWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 20px;
`

export const Input = styled.input`
    position: absolute;
`

export const Text = styled.p`
    width: 100px;
    height: 35px;
    border-radius: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    color: ${({selected}) => selected ? '#FFFFFF' : '#000000'};
    background-color: ${({selected}) => selected ? '#2DCF73' : '#F6F6F6'};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`