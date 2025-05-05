import React, { useState, useEffect } from 'react';
import * as S from './TravelStyleOptionPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { travelStyleData } from './../../constant/travelStyleData';
import { GreenButton } from './../../components/GreenButton';
import { useNavigate } from "react-router-dom";

const TravelStyleOptionPage = () => {
    const [selectedStyle, setSelectedStyle] = useState({});
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    const handleDistrict = (questionId, value) => {
        setSelectedStyle(prev => ({
            ...prev,
            [questionId]: prev[questionId] === value ? undefined : value
        }));
    };
    

    const handleButton = () => {
        navigate('/');
    }
    
    useEffect(() => {
        setDisable(Object.keys(selectedStyle).length !== travelStyleData.length);
    }, [selectedStyle]);

    return (
        <Layout>
            <Header />
            <S.Wrapper>
                {travelStyleData.map((data, index) => (
                    <S.QuestionWrapper id={index}>
                        <S.Question>{data.question}</S.Question>
                        <S.OptionWrapper>
                        {data.options.map((option, index) => (
                            <label key={index}>
                                <S.Input
                                    type='radio'
                                    name='option${data.id}'
                                    value={option.value}
                                    onClick={() => handleDistrict(data.id, option.value)}
                                    onChange={()=>{}}
                                    checked={selectedStyle[data.id] === option.value}
                                />
                                <S.Text selected={selectedStyle[data.id] === option.value}>
                                    {option.text}
                                </S.Text>
                            </label>        
                        ))}
                        </S.OptionWrapper>
                    </S.QuestionWrapper>
                ))}
            </S.Wrapper>
            <S.Buttonwrapper>
                <GreenButton
                    text='Next'
                    disabled={disable}
                    onClick={handleButton}
                />                
            </S.Buttonwrapper>
        </Layout>
    )
}

export default TravelStyleOptionPage;
