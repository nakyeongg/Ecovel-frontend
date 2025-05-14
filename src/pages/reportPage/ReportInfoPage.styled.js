import styled from "styled-components";

export const Title = styled.h1`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 30px;
    text-align: center;
`

export const Wrapper = styled.div`
    background-color: #E0F8EA;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
    padding: 20px;
    border: ${({active}) => (active ? '3px solid #FF0000' : '1px solid #D9D9D9')};
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Amount = styled.h4`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`

export const TreeWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const TreeIcon = styled.img`
    height: 45px;
`

export const TreeEffect = styled.p`
    color: #207545;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    width: 161px;
`

export const Air = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
`

export const WindIcon = styled.img`
    height: 30px;
`

export const AirEffect = styled.p`
    color: #207545;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`