import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled.div`
    display: flex;
    height: 280px;
    width: 100%;
    gap: 15px;
    margin-top: 20px;
`

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
`

export const LargeButton = styled(Link)`
    width: 50%;
    height: 100%;
    background-color: #F6F6F6;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    position: relative;
`

export const SmallButton = styled(Link)`
    width: 100%;
    height: 100%;
    background-color: #F6F6F6;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    position: relative;
`

export const LargeIcon = styled.img`
    width: 110px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`

export const SmallIcon = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 5px;
    right: 10px;
`

export const Title = styled.p`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`