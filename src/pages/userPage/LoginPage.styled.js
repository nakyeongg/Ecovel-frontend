import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo = styled.img`
    width: 65px;
    margin-top: 100px;
    margin-bottom: 40px;
`

export const InputWrapper = styled.div`
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    padding: 0 10px;
`

export const InuptIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
`

export const Input = styled.input`
    width: 100%;
    border: 0;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardRegular["font-family"]};

    &::placeholder {
        color: #7F7F7F;
    }
`