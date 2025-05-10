import styled from "styled-components";

export const Desc = styled.h4`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    width: 100%;
    margin: 10px 0 30px 0;
`

export const RegionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 10px;
`

export const DistrictWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 10px;
    font-size: 14px;
    margin-bottom: 110px;
`

export const Input = styled.input`
    position: absolute;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    background-color: ${({selected}) => selected ? 'rgba(45, 207, 50, 0.5)' : '#F3F3F3'};
    color: black;
    cursor: pointer;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    height: 100%;
    text-align: center;
`

export const Buttonwrapper = styled.div`
    width: 100%;
    min-width: 393px;
    max-width: 420px;
    padding: 0 25px;
    position: fixed;
    bottom: 50px;
`