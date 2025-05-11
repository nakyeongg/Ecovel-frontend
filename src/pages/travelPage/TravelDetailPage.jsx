import React, { useEffect, useState } from 'react';
import * as S from './TravelDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { GreenButton } from './../../components/GreenButton';
import bus from '../../assets/icons/travel/bus.svg';
import car from '../../assets/icons/travel/car.svg';
import bike from '../../assets/icons/travel/bike.svg';
import walk from '../../assets/icons/travel/walk.svg';
import loadingIcon from '../../assets/images/loading.gif';
import { useLocation } from 'react-router-dom';
import mainAxios from './../../apis/mainAxios';

const TravelDetailPage = () => {
    const { state } = useLocation([]);
    const [travelData, setTravelData] = useState([]);
    const [city, setCity] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [planId, setPlanId] = useState();
    const [loading, setLoading] = useState(false);

    const handleTravelDetail = async () => {
        try {
            setLoading(true);
            const response = await mainAxios.post('/travel/recommend', {
                city: state.selectedRegionText,
                district: state.selectedDistrictText,
                duration: state.selectedDurationText,
                style: state.selectedPreferenceText,
                transport: state.selectedTransportTexts,
            });
            console.log('여행지 생성하기 성공', response);
            console.log('여행지 생성', response.data.result.scheduleList);
            setCity(response.data.result.city);
            setThumbnail(response.data.result.thumbnail);
            setPlanId(response.data.result.planId);
            setTravelData(response.data.result.scheduleList);
            setLoading(false);
        } catch(error) {
            console.log('여행지 생성하기 실패', error);
        }
    }

    useEffect(() => {
        handleTravelDetail();
    },[]);

    return (
        <Layout>
            <Header />
            {loading ? (
                <img src={loadingIcon} alt="loading icon" />
            ) : (
                <>
                    <S.Title>{city}</S.Title>
                    <S.Image src={thumbnail} />
                    {travelData.map((data, index) => (
                        <>
                            <S.Day>{data.day}</S.Day>
                            {data.places.map((place, index) => (
                                <S.PlaceWrapper key={index}>
                                    <S.InfoWrapper>
                                        <S.Place>{place.name}</S.Place>
                                        <S.TransportWrapper>
                                            {state.selectedTransportTexts.includes('Public Transport') && (
                                                <S.TimeWrapper>
                                                    <S.TransportIcon src={bus} />
                                                    <S.Time>{place.publicTime}분</S.Time>
                                                </S.TimeWrapper>
                                            )}
                                            {state.selectedTransportTexts.includes('Vehicle') && (
                                                <S.TimeWrapper>
                                                    <S.TransportIcon src={car} />
                                                    <S.Time>{place.carTime}분</S.Time>
                                                </S.TimeWrapper>
                                            )}
                                            {state.selectedTransportTexts.includes('Bicycle') && (
                                                <S.TimeWrapper>
                                                    <S.TransportIcon src={bike} />
                                                    <S.Time>{place.bicycleTime}분</S.Time>
                                                </S.TimeWrapper>
                                            )}
                                            {state.selectedTransportTexts.includes('Walking') && (
                                                <S.TimeWrapper>
                                                    <S.TransportIcon src={walk} />
                                                    <S.Time>{place.walkTime}분</S.Time>
                                                </S.TimeWrapper>
                                            )}
                                        </S.TransportWrapper>
                                    </S.InfoWrapper>
                                    <S.PlaceImage src={place.imageUrl}/>
                                </S.PlaceWrapper>
                            ))}
                        </>
                    ))}
                    <GreenButton text='Go to see carbon savings' marginBottom={20}/>
                </>
            )}
        </Layout>
    )
}

export default TravelDetailPage;
