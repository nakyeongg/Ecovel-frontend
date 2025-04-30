import styled from "styled-components";

export const Icon = styled.img`
    width: 110px;
    height: 110px;
    margin-top: 180px;
`

export const Text = styled.h2`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardExtraBold["font-family"]};
    font-size: 26px;
    margin-top: 20px;
    margin-bottom: 80px;
`