import styled from "styled-components";

export const Desc = styled.h4`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    width: 100%;
    margin: 10px 0 30px 0;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 10px;
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
`

export const Buttonwrapper = styled.div`
    width: calc(100% - 50px);
    position: absolute;
    bottom: 50px;
`