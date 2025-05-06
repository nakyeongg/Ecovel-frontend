import styled from "styled-components";

export const Title = styled.h1`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 30px;
    text-align: center;
`

export const RowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const UnitWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 3px;
    margin-bottom: 10px;
`

export const ReducedCarbon = styled.h2`
    color: #207545;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 40px;
    text-align: center;
`

export const Unit = styled.p`
    color: #7F7F7F;
    text-align: center;
`

export const Magnifier = styled.img`
    height: 38px;
    margin-left: 5px;
`

export const ScoreWrapper = styled.div`
    background-color: #F7F7F7;
    border-radius: 15px;
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    margin-top: 10px;
`

export const TreeIcon = styled.img`
    width: 50px;
    margin: 0 auto;
`

export const Score= styled.p`
    color: #207545;
    font-size: 20px;
    margin-top: 10px;
`