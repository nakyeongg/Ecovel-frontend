import React, { useState, useEffect } from 'react';
import * as S from './TravelStyleOptionPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { travelStyleData } from './../../constant/travelStyleData';
import { GreenButton } from './../../components/GreenButton';
import { useNavigate, useLocation } from "react-router-dom";
import mainAxios from '../../apis/mainAxios';
import loadingIcon from '../../assets/images/loading.gif';

const TravelStyleOptionPage = () => {
    const [selectedStyle, setSelectedStyle] = useState({});
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    const { state } = useLocation(); // selectedRegionText, selectedDistrictText
    const [selectedRegionText, setSelectedRegionText] = useState(state.selectedRegionText);
    const [selectedDistrictText, setSelectedDistrictText] = useState(state.selectedDistrictText);
    const [loading, setLoading] = useState(false);

    const handleDistrict = (questionId, value) => {
        if (questionId===2) {
            setSelectedStyle(prev => {
                const current = prev[2] || [];
                if (current.includes(value)) {
                    return { ...prev, [2]: current.filter(temp => temp !== value) };
                } else {
                    return { ...prev, [2]: [...current, value] };
                }
            });
        } else {
            setSelectedStyle(prev => ({
                ...prev,
                [questionId]: prev[questionId] === value ? undefined : value
            }));
        }
        console.log('selectedStyle', selectedStyle[0],selectedStyle[1],selectedStyle[2]);
    };
    
    const handleButton = async () => {
        try {
            setLoading(true);
            const selectedDurationText = travelStyleData[0].options.find(duration => duration.value === selectedStyle[0])?.text;
            const selectedPreferenceText = travelStyleData[1].options.find(preference => preference.value === selectedStyle[1])?.text;
            const selectedTransportTexts = travelStyleData[2].options
                .filter(option => selectedStyle[2]?.includes(option.value))
                .map(option => option.text);
            console.log('selected options: ',selectedDurationText, selectedPreferenceText, selectedTransportTexts);
        
            const response = await mainAxios.post('/travel/recommend', {
                city: selectedRegionText,
                district: selectedDistrictText,
                duration: selectedDurationText,
                style: selectedPreferenceText,
                transport: selectedTransportTexts,
            });
            console.log('여행지 생성하기 요청 성공', response);
            const planId = response.data.result.planId;
            setLoading(false);
            navigate(`/travel/detail/${planId}`);
        } catch(error) {
            setLoading(false);
            console.log('여행지 생성 실패');
        }
    }

    useEffect(() => {
        setDisable(selectedStyle[0]===undefined || selectedStyle[1]===undefined || !Array.isArray(selectedStyle[2])||selectedStyle[2].length===0);
    }, [selectedStyle]);

    return (
        <Layout>
            <Header />
            {loading ? (
                <img src={loadingIcon} alt='loading icon'/>
            ) : (
                <>
                    <S.Wrapper>
                    {travelStyleData.map((data, index) => (
                        <S.QuestionWrapper key={index}>
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
                                        checked={
                                            data.id===2
                                            ? selectedStyle[2]?.includes(option.value)
                                            :selectedStyle[data.id] === option.value
                                        }
                                    />
                                    <S.Text selected={
                                        data.id===2 
                                        ? selectedStyle[2]?.includes(option.value)
                                        :selectedStyle[data.id] === option.value
                                    }>
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
            </>
            )}
        </Layout>
    )
}

export default TravelStyleOptionPage;
