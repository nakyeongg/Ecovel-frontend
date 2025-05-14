import React from 'react';
import styled from "styled-components";

export const TravelInfo = ({ icon, title, hashtag1, hashtag2, hashtag3, hashtag4, image=null, scheduled=false, onClick }) => {
    return (
        <Wrapper>
            <Left>
                <TitleWrapper>
                    <Icon src={icon}/>
                    <Title>{title}</Title>
                    {scheduled && <StartButton onClick={onClick}>start</StartButton>}
                </TitleWrapper>
                <HashtagsWrapper>
                    <Hashtag>#{hashtag1}</Hashtag>
                    <Hashtag>#{hashtag2}</Hashtag>
                    <Hashtag>#{hashtag3}</Hashtag>
                    {hashtag4 && (<Hashtag>#{hashtag4}</Hashtag>)}
                </HashtagsWrapper>
            </Left>
            {image && <Image src={image}/>}
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    border-radius: 15px;
    border: 1px solid #D9D9D9;
    background-color: #F7F7F7;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
`

export const Icon = styled.img`
    width: 25px;
    height: 25px;
`

export const Title = styled.h2`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`

export const StartButton = styled.button`
    background-color: #2DCF73;
    color: #F5F5F5;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 18px;
    margin-left: 10px;
`

export const HashtagsWrapper = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin-right: 5px;
    color: #545454;
`

export const Hashtag = styled.p`
    display: inline;
    margin-top: 5px;
`

export const Image = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin: auto 0;
`