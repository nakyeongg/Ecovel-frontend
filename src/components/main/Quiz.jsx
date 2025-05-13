import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import aiAxios from './../../apis/aiAxios';
import mainAxios from '../../apis/mainAxios';

export const Quiz = ({ userId }) => {
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [isSolved, setIsSolved] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleQuiz = async () => {
        try {
            const response = await aiAxios.get('/quiz/today');
            console.log('퀴즈 조회 요청 성공', response);
            setQuestion(response.data.question);
        } catch(error) {
            console.log('퀴즈 조회 요청 실패', error);
        }
    }

    const handleAnswer = async (props) => {
        if (!userId) {
            console.error("userId가 없습니다.");
            return;
        }
        try {
            console.log('props:', props);
            const response = await mainAxios.post('/quiz/submit', {
                userId,
                answer: props,
            })
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleQuiz();
    }, [])

    return (
        <QuizWrapper>
            {!isSolved ? (
                <>
                    <ContentWrapper>
                        <Title>Today’s Quiz</Title>
                        <Content>{question}</Content>
                    </ContentWrapper>
                    <ButtonWrapper>
                        <TrueButton onClick={() => handleAnswer(true)}>O</TrueButton>
                        <FalseButton onClick={() => handleAnswer(false)}>X</FalseButton>
                    </ButtonWrapper>                
                </>
            ) : (
                <ContentWrapper>
                    {isCorrect ? (
                        <CorrectTitle>Correct</CorrectTitle>
                    ) : (
                        <WrongTitle>Wrong</WrongTitle>
                    )}
                    <Content>Solid soap is more eco-friendly than liquid soap when traveling.</Content>                
                </ContentWrapper>
            )}
        </QuizWrapper>
    )
}

const QuizWrapper = styled.div`
    background-color: #CCF1CF;
    border-radius: 20px;
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const Title = styled.h3`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};

`

const Content = styled.p`
    font-size: 14px;
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const TrueButton = styled.button`
    width: 40px;
    height: 40px;
    color: #1E5EFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 22px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`

const FalseButton = styled.button`
    width: 40px;
    height: 40px;
    color: #FF1E1E;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 22px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`

const CorrectTitle = styled.h3`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    color: #1E5EFF;
    font-size: 20px;
`

const WrongTitle = styled.h3`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    color: #FF1E1E;
    font-size: 20px;
`