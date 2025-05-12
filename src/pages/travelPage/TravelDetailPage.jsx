import React, { useEffect, useState } from 'react';
import * as S from './TravelDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { GreenButton } from './../../components/GreenButton';
import bus from '../../assets/icons/travel/bus.svg';
import car from '../../assets/icons/travel/car.svg';
import bike from '../../assets/icons/travel/bike.svg';
import walk from '../../assets/icons/travel/walk.svg';
import rotate from '../../assets/icons/travel/rotate.svg';
import emptyHeart from '../../assets/icons/travel/emptyHeart.svg';
import fullHeart from '../../assets/icons/travel/fullHeart.svg';
import { useLocation, useParams } from 'react-router-dom';
import mainAxios from './../../apis/mainAxios';

const TravelDetailPage = () => {
    const { state } = useLocation();
    const [travelData, setTravelData] = useState([]);
    const [city, setCity] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [planId, setPlanId] = useState(state);
    const [transport, setTransport] = useState([]);
    const [scrapped, setScrapped] = useState(false);
    const { id } = useParams();

    const handleTravelDetail = async () => {
        try {
            const response = await mainAxios.get(`/travel/details/${id}`);
            console.log('여행지 디테일 요청 성공', response);
            setCity(response.data.result.city);
            setThumbnail(response.data.result.thumbnail);
            setPlanId(response.data.result.planId);
            setTravelData(response.data.result.scheduleList);
            setTransport(response.data.result.transport);
        } catch(error) {
            console.log('여행지 생성하기 실패', error);
        }
    }

    const handleScrap = async () => {
        try {
            const response = await mainAxios.post(`/travel/favorites?planId=${planId}`);
            console.log('스크랩 요청 성공', response);
            setScrapped(response.data.success)
        } catch(error) {
            console.log('스크랩 요청 실패', error);
        }
    }

    const deleteScrap = async () => {
        try {
            const response = await mainAxios.delete(`/travel/favorites/${planId}`);
            console.log('스크랩 취소 요청 성공', response);
            setScrapped(!response.data.success)
        } catch(error) {
            console.log('스크랩 취소 요청 실패', error);
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
            <S.Image src={thumbnail} />
            {travelData.map((data, index) => (
                <>
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
                                                <S.Time>{place.publicTime}분</S.Time>
                                            </S.TimeWrapper>
                                        )}
                                        {transport.includes('Vehicle') && (
                                            <S.TimeWrapper>
                                                <S.TransportIcon src={car} />
                                                <S.Time>{place.carTime}분</S.Time>
                                            </S.TimeWrapper>
                                        )}
                                        {transport.includes('Bicycle') && (
                                            <S.TimeWrapper>
                                                <S.TransportIcon src={bike} />
                                                <S.Time>{place.bicycleTime}분</S.Time>
                                            </S.TimeWrapper>
                                        )}
                                        {transport.includes('Walking') && (
                                            <S.TimeWrapper>
                                                <S.TransportIcon src={walk} />
                                                <S.Time>{place.walkTime}분</S.Time>
                                            </S.TimeWrapper>
                                        )}
                                    </S.TransportWrapper>
                                    )
                                }
                            </S.InfoWrapper>
                            {/* <S.PlaceImage src={place.imageUrl}/> */}
                        </S.PlaceWrapper>
                    ))}
                </>
            ))}
            <GreenButton text='Go to see carbon savings' marginBottom={20}/>
        </Layout>
    )
}

export default TravelDetailPage;
