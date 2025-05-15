import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalLayout } from './../../layout/ModalLayout';
import back from '../../assets/icons/mission/back.svg';
import imageIcon from '../../assets/icons/mission/image.svg';

export const ImageModal = ({ icon, title, buttonText, onClick, backClick, ref, onChange, image }) => {
    return (
        <ModalLayout>
            <div>
                <Top>
                    <BackButton onClick={backClick}>
                        <BackIcon src={back}/>
                    </BackButton>
                    <CameraIcon src={icon}/>
                </Top>
                <Title>{title}</Title>
                <GuideText>* guideline </GuideText>
                {image ? (
                    <Image src={image}/>
                ) : (
                    <ImageButton onClick={() => ref.current.click()}>
                        <ImageInput
                            type='file'
                            accept='image/*'
                            ref={ref}
                            onChange={onChange}
                        />
                        <ImageIcon src={imageIcon}/>
                        <ImageButtonText>Image Upload</ImageButtonText>
                    </ImageButton>
                )}
            </div>
            <GreenRoundButton onClick={onClick}>
                {buttonText}
            </GreenRoundButton>
        </ModalLayout>
    )
}

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 60px;
`

const BackButton = styled.button`
    width: 24px;
    height: 24px;
`

const BackIcon = styled.img`
    width: 100%;
    height: 100%;
`

const CameraIcon = styled.img`
    width: 60px;
    height: 60px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const Title = styled.h2`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    height: 62px;
`

const GuideText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin-top: 20px;
`

const ImageInput = styled.input`
    display: none;
`

const ImageButton = styled.button`
    border: 1px solid #8BE4B1;
    background-color: #EAFBF1;
    height: 248px;
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ImageIcon = styled.img`
    width: 80px;
    height: 80px;
`

const ImageButtonText = styled.p`
    color: #B2BFB7;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 12px;
`

const Image = styled.img`
    height: 248px;
    width: 100%;
    object-fit: cover;
`

const GreenRoundButton = styled.button`
    background-color: #2DCF73;
    border-radius: 30px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: #FFFFFF;
    height: 50px;
`