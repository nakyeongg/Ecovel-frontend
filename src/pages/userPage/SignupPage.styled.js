import styled from "styled-components";

export const Title = styled.h1`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 22px;
    margin-bottom: 30px;
    width: 100%;
`

export const Container = styled.div`
    width: 100%;
    margin-bottom: 20px;

`

export const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    margin-bottom: 5px;
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
`

export const Category = styled.h4`
    color: #7F7F7F;
`

export const Input = styled.input`
    width: 100%;
    border: 1px solid #7F7F7F;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardRegular["font-family"]};
    height: 48px;
    border-radius: 10px;
    padding: 0 10px;

    &::placeholder {
        color: #7F7F7F;
    }
`

export const EmailInputWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
`

export const EmailButton = styled.button`
    background-color: #2DCF73;
    color: #FFFFFF;
    padding: 0 10px;
    border-radius: 10px;
    
    &:disabled {
        background-color: #D9D9D9;
        cursor: default;
    }
`