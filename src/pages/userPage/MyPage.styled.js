import styled from "styled-components";

export const Name = styled.h4`
    font-size: 24px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin-bottom: 50px;
`

export const ProfileWrapper = styled.div`
    width: 110px;
    height: 110px;
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #7F7F7F;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
`

export const Profile = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-top: 50px;
    margin-bottom: 10px;
`

export const ProfileButton = styled.input`
    display: none;
`

export const Camera = styled.img`
    width: 30px;
`

export const Title = styled.h3`
    color: #3B414B;
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    width: 100%;
    margin-bottom: 30px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: auto;
    margin-bottom: 20px;
`

export const Icon = styled.img`
    width: 32px;
    height: 32px;
`

export const Button = styled.button`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`