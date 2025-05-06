import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`

export const ReportWrapper = styled.div`
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    width: 100%;
    padding: 20px;
    background-color: #F7F7F7;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Date = styled.div`
    background-color: #2DCF73;
    color: #F5F5F5;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 8px;
`

export const PlaceWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Place = styled.h4`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 20px;
`

export const NextIcon = styled.img`
    width: 22px;
    margin-left: 10px;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 20px;
`

export const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Desc = styled.p`
    color: #207545;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`

export const CloudImage = styled.img`
    width: 72px;
    height: 50px;
`