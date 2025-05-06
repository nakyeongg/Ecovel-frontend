import React, { useState } from 'react';
import * as S from './TravelDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { travelData } from '../../constant/travelData';
import jeju from '../../assets/images/jeju.png';
import bus from '../../assets/icons/travel/bus.svg';
import car from '../../assets/icons/travel/car.svg';
import bike from '../../assets/icons/travel/bike.svg';
import walk from '../../assets/icons/travel/walk.svg';

const TravelDetailPage = () => {
    const [selectedTransport, setSelectedTransport] = useState(["PublicTransport", "Walking"]);

    return (
        <Layout>
            <Header />
            <S.Title>Jeju island</S.Title>
            <S.Image src={jeju} />
            {travelData.map((data, index) => (
                <>
                    <S.Day>{data.day}</S.Day>
                    {data.places.map((place, index) => (
                        <S.PlaceWrapper>
                            <S.InfoWrapper>
                                <S.Place>{place.name}</S.Place>
                                <S.TransportWrapper>
                                    <S.TimeWrapper>
                                        <S.TransportIcon src={bus} />
                                        <S.Time>{place.publicTime}분</S.Time>
                                    </S.TimeWrapper>
                                    <S.TimeWrapper>
                                        <S.TransportIcon src={car} />
                                        <S.Time>{place.carTime}분</S.Time>
                                    </S.TimeWrapper>
                                    <S.TimeWrapper>
                                        <S.TransportIcon src={bike} />
                                        <S.Time>{place.bicycleTime}분</S.Time>
                                    </S.TimeWrapper>
                                    <S.TimeWrapper>
                                        <S.TransportIcon src={walk} />
                                        <S.Time>{place.walkTime}분</S.Time>
                                    </S.TimeWrapper>
                                </S.TransportWrapper>
                            </S.InfoWrapper>
                            <S.PlaceImage src={place.imageUrl}/>
                        </S.PlaceWrapper>
                    ))}
                </>
            )) }
        </Layout>
    )
}

export default TravelDetailPage;
