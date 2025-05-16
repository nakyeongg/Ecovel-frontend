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
            console.log('handleOngoing success', response);
            setOngoing(response.data.result);
        } catch(error) {
            console.log(error);
        }
    }

    const handleScheduled = async () => {
        try {
            const response = await mainAxios.get('/mission/scheduled');
            console.log('handleScheduled success', response);
            console.log('scheduled travel list', response.data.result);
            setScheduled(response.data.result);
        } catch(error) {
            console.log(error);
        }
    }

    const handleCompleted = async () => {
        try {
            const response = await mainAxios.get('/mission/completed');
            console.log('completed travel list', response);
            setComplete(response.data.result);
        } catch(error) {
            console.log(error);
        }
    }

    const handleTravelStart = async (planId) => {
        try {
            if (ongoing.length > 0) {
                alert('Please complete the ongoing trip first');
            } else {
                const response = await mainAxios.post(`/mission/start?planId=${planId}`);
                console.log('handleTravelStart success', response);
                await handleOngoing();
                await handleScheduled();
                alert('The journey has begun. Please complete the mission!');
                setSelectedOption(0);
            }
        } catch(error) {
            console.log('handleTravelStart error', error);
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
                            hashtag1={data.district}
                            hashtag2={data.style}
                            hashtag3={data.transport[0]}
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
                        hashtag1={data.district}
                        hashtag2={data.style}
                        hashtag3={data.transport[0]}
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
                        hashtag1={data.district}
                        hashtag2={data.style}
                        hashtag3={data.transport[0]}
                        // image={data.imageUrl}
                    />
                ))
            ) : null}
        </Layout>
    )
}

export default MissionListPage;
