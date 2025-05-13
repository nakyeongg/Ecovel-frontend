import React from 'react';
import styled from 'styled-components';
import { ModalLayout } from './../../layout/ModalLayout';
import back from '../../assets/icons/mission/back.svg';

export const GuideModal = ({ icon, title, buttonText, onClick }) => {
    return (
        <ModalLayout>
            <BackButton>
                <BackIcon src={back}/>
            </BackButton>
            <Content>
                <Icon src={icon}/>
                <Title>{title}</Title>
            </Content>
            <GreenRoundButton onClick={onClick}>
                {buttonText}
            </GreenRoundButton>
        </ModalLayout>
    )
}

const BackButton = styled.button`
    width: 0px;
    height: 0px;
`

const BackIcon = styled.img`
    width: 100%;
    height: 100%;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Icon = styled.img`
    width: 100px;
    height: 100px;
`

const Title = styled.h2`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 25px;
    text-align: center;
    margin-top: 10px;
    height: 62px;
`

const GreenRoundButton = styled.button`
    background-color: #2DCF73;
    border-radius: 30px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: #FFFFFF;
    height: 50px;
`