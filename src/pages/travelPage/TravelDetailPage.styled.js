import styled from "styled-components";

export const Title = styled.h1`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`

export const Image = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 15px;
`

export const Day = styled.h3`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    width: 100%;
    margin-bottom: 15px;
`

export const PlaceWrapper = styled.div`
    background-color: #F3F3F3;
    border-radius: 15px;
    width: 100%;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`

export const Place = styled.h4`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin-bottom: 10px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const TransportWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const TimeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const TransportIcon = styled.img`
    width: 16px;
    height: 16px;
`

export const Time = styled.p`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    color: #A1A1A1;
`

export const PlaceImage = styled.img`
    width: 55px;
    height: 55px;
`