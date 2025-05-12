import styled from "styled-components";
import { Link } from "react-router-dom";

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    z-index: 1;
`

export const LogoLink = styled(Link)`
    width: 140px;
    z-index: 1;
`

export const Logo = styled.img`
    width: 140px;
    padding: 10px;
`

export const OptionWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    z-index: 1;
    padding: 2px 10px;
    gap: 10px;
    overflow-x: auto;

    &::-webkit-scrollbar{
        display:none;
    }
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
    cursor: pointer;
`