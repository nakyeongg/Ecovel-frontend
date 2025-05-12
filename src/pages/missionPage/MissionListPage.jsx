import React, { useEffect, useState } from 'react';
import * as S from './MissionListPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import { TravelInfo } from './../../components/travel/TravelInfo';
import camera from '../../assets/icons/mission/camera.png';
import { Link } from 'react-router-dom';
import mainAxios from './../../apis/mainAxios';

const MissionListPage = () => {
    const [selectedOption, setSelectedOption] = useState(0);
    const [ongoing, setOngoing] = useState([]);
    const [scheduled, setScheduled] = useState([]);
    const [complete, setComplete] = useState([]);

    const options = [
        {text: 'Ongoing', value: 0},
        {text: 'Scheduled', value: 1},
        {text: 'Complete', value: 2},
    ]

    const handleOngoing = async () => {
        try {
            const response = await mainAxios.get('/mission/ongoing');
            console.log('진행 중인 여행 목록 요청 성공', response);
            setOngoing(response.data.result);
        } catch(error) {
            console.log(error);
        }
    }

    const handleScheduled = async () => {
        try {
            const response = await mainAxios.get('/mission/scheduled');
            console.log('예정된 여행 목록 요청 성공', response);
            console.log('예정된 여행 목록', response.data.result);
            setScheduled(response.data.result);
        } catch(error) {
            console.log(error);
        }
    }

    const handleCompleted = async () => {
        try {
            const response = await mainAxios.get('/mission/completed');
            console.log('완료된 여행 목록 요청 성공', response);
            setComplete(response.data.result);
        } catch(error) {
            console.log(error);
        }
    }

    const handleTravelStart = async (planId) => {
        try {
            if (ongoing.length > 0) {
                alert('진행 중인 여행이 존재합니다.');
            } else {
                const response = await mainAxios.post(`/mission/start?planId=${planId}`);
                console.log('여행 시작하기 요청 성공', response);
            }
        } catch(error) {
            console.log('여행 시작하기 요청 에러', error);
        }
    }

    const handleOption = (event) => {
        const value = Number(event.target.value);
        if (value===selectedOption) {
            setSelectedOption(undefined);
        } else {
            setSelectedOption(value);
        }
    }

    useEffect(() => {
        handleOngoing();
        handleScheduled();
        handleCompleted();
    }, [])

    return (
        <Layout>
            <Header />
            <S.Guide>You can choose an ongoing trip and complete the mission</S.Guide>
            <S.OptionWrapper>
                {options.map((option, index) => (
                    <label key={index}>
                        <S.Input
                            type='radio'
                            name='option'
                            value={option.value}
                            onClick={handleOption}
                            onChange={()=>{}}
                            checked={option.value===selectedOption}
                        />
                        <S.Text selected={index===selectedOption}>
                            {option.text}
                        </S.Text>
                    </label>
                ))}
            </S.OptionWrapper>
            {selectedOption===0 ? 
                (ongoing.map((data, index) => (
                    <Link to={`/mission/map/${data.planId}`} style={{width: '100%'}}>
                        <TravelInfo
                            key={index}
                            icon={camera}
                            title={data.city}
                            hashtag1={data.city}
                            hashtag2={data.style}
                            hashtag3={data.transport}
                            // image={data.imageUrl}
                        />
                    </Link>
                ))
            ) : selectedOption===1 ? 
                (scheduled.map((data, index) => (
                    <TravelInfo
                        key={index}
                        icon={camera}
                        title={data.city}
                        hashtag1={data.city}
                        hashtag2={data.style}
                        hashtag3={data.transport}
                        // image={data.imageUrl}
                        scheduled={true}
                        onClick={() => handleTravelStart(data.planId)}
                    />
                ))
            ) : selectedOption===2 ?
                (complete.map((data, index) => (
                    <TravelInfo
                        key={index}
                        icon={camera}
                        title={data.city}
                        hashtag1={data.city}
                        hashtag2={data.style}
                        hashtag3={data.transport}
                        // image={data.imageUrl}
                    />
                ))
            ) : null}
        </Layout>
    )
}

export default MissionListPage;
