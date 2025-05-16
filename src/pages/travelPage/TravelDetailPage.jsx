import React, { useEffect, useState } from 'react';
import * as S from './TravelDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { GreenButton } from './../../components/GreenButton';
import bus from '../../assets/icons/travel/bus.svg';
import car from '../../assets/icons/travel/car.svg';
import bike from '../../assets/icons/travel/bike.svg';
import walk from '../../assets/icons/travel/walk.svg';
import jeju from '../../assets/images/jeju.png';
import rotate from '../../assets/icons/travel/rotate.svg';
import emptyHeart from '../../assets/icons/travel/emptyHeart.svg';
import fullHeart from '../../assets/icons/travel/fullHeart.svg';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import mainAxios from './../../apis/mainAxios';

const TravelDetailPage = () => {
    const { state } = useLocation();
    const [travelData, setTravelData] = useState([]);
    const [city, setCity] = useState();
    // const [thumbnail, setThumbnail] = useState();
    const [planId, setPlanId] = useState(state);
    const [transport, setTransport] = useState([]);
    const [scrapped, setScrapped] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleTravelDetail = async () => {
        try {
            const response = await mainAxios.get(`/travel/details/${id}`);
            console.log('handleTravelDetail success', response);
            setCity(response.data.result.city);
            // setThumbnail(response.data.result.thumbnail);
            setPlanId(response.data.result.planId);
            setTravelData(response.data.result.scheduleList);
            setTransport(response.data.result.transport);
            setScrapped(response.data.result.isFavorite);
        } catch(error) {
            console.log('handleTravelDetail error', error);
        }
    }

    const handleScrap = async () => {
        try {
            const response = await mainAxios.post(`/travel/favorites?planId=${planId}`);
            console.log('handleScrap success', response);
            setScrapped(response.data.success)
        } catch(error) {
            console.log('handleScrap error', error);
        }
    }

    const deleteScrap = async () => {
        try {
            const response = await mainAxios.delete(`/travel/favorites/${planId}`);
            console.log('deleteScrap succcess', response);
            setScrapped(!response.data.success);
            await handleScrap();
        } catch(error) {
            console.log('deleteScrap error', error);
        }
    }

    const handleReport = async () => {
        try {
            console.log('planId', planId);
            const response = await mainAxios.get(`/report/${planId}`);
            console.log('handleReport success', response);
            navigate(`/report/detail/${id}`)
        } catch(error) {
            console.log('handleReport error', error);
        }
    }

    useEffect(() => {
        handleTravelDetail();
    },[]);

    return (
        <Layout>
            <Header>
                <S.HeaderIconWrapper>
                    <S.IconButton>
                        <S.Icon src={rotate} alt='rotate icon'/>
                    </S.IconButton>
                        {scrapped ? (
                            <S.IconButton onClick={deleteScrap}>
                                <S.Icon src={fullHeart} alt='full heart icon'/>
                            </S.IconButton>
                        ) : (
                            <S.IconButton onClick={handleScrap}>
                                <S.Icon src={emptyHeart} alt='empty heart icon'/>
                            </S.IconButton>
                        )}
                </S.HeaderIconWrapper>
            </Header>
            <S.Title>{city}</S.Title>
            <S.Image src={jeju} />
            {travelData.map((data, index) => (
                <S.DayWrapper key={index}>
                    <S.Day>{data.day}</S.Day>
                    {data.places.map((place, index) => (
                        <S.PlaceWrapper key={index}>
                            <S.InfoWrapper>
                                <S.Place>{place.name}</S.Place>
                                {!(data.day==='DAY 1'&&index===0) && (
                                    <S.TransportWrapper>
                                        {transport.includes('Public Transport') && (
                                            <S.TimeWrapper>
                                                <S.TransportIcon src={bus} />
                                                <S.Time>{place.publicTime}m</S.Time>
                                            </S.TimeWrapper>
                                        )}
                                        {transport.includes('Vehicle') && (
                                            <S.TimeWrapper>
                                                <S.TransportIcon src={car} />
                                                <S.Time>{place.carTime}m</S.Time>
                                            </S.TimeWrapper>
                                        )}
                                        {transport.includes('Bicycle') && (
                                            <S.TimeWrapper>
                                                <S.TransportIcon src={bike} />
                                                <S.Time>{place.bicycleTime}m</S.Time>
                                            </S.TimeWrapper>
                                        )}
                                        {transport.includes('Walking') && (
                                            <S.TimeWrapper>
                                                <S.TransportIcon src={walk} />
                                                <S.Time>{place.walkTime}m</S.Time>
                                            </S.TimeWrapper>
                                        )}
                                    </S.TransportWrapper>
                                    )
                                }
                            </S.InfoWrapper>
                            <S.PlaceImage src={place.imageUrl}/>
                        </S.PlaceWrapper>
                    ))}
                </S.DayWrapper>
            ))}
            <GreenButton text='Go to see carbon savings' $marginBottom={20} onClick={handleReport}/>
        </Layout>
    )
}

export default TravelDetailPage;
