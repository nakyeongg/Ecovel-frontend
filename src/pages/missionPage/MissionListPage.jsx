import React, { useState } from 'react';
import * as S from './MissionListPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import { TravelInfo } from './../../components/travel/TravelInfo';
import { ongoing } from '../../constant/missionListData';
import { scheduled } from '../../constant/missionListData';
import { complete } from '../../constant/missionListData';
import camera from '../../assets/icons/mission/camera.png';

const MissionListPage = () => {
    const [selectedOption, setSelectedOption] = useState(0);

    const options = [
        {text: 'Ongoing', value: 0},
        {text: 'Scheduled', value: 1},
        {text: 'Complete', value: 2},
    ]

    const handleOption = (event) => {
        const value = Number(event.target.value);
        if (value===selectedOption) {
            setSelectedOption(undefined);
        } else {
            setSelectedOption(value);
        }
    }

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
                    <TravelInfo
                        key={index}
                        icon={camera}
                        title={data.city}
                        hashtag1={data.city}
                        hashtag2={data.style}
                        hashtag3={data.transport}
                        image={data.imageUrl}
                    />
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
                        image={data.imageUrl}
                        scheduled={true}
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
                        image={data.imageUrl}
                    />
                ))
            ) : null}
        </Layout>
    )
}

export default MissionListPage;
