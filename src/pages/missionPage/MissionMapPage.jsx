import React, { useState, useEffect } from 'react';
import * as S from './MissionMapPage.styled';
import { MapLayout } from '../../layout/MapLayout';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { mapLocationData } from './../../constant/mapLocationData';
import logo from '../../assets/images/logo.png';
import camera from '../../assets/icons/mission/camera.png';
import { Link } from 'react-router-dom';

const MissionMapPage = () => {
    const [selectedDay, setSelectedDay] = useState();
    const [map, setMap] = useState(null);
    
    const days = Array.from(new Set(mapLocationData.map(data => data.day)));

    const handleOption = (event) => {
        const value = event.target.value;
        if (value===selectedDay) {
            setSelectedDay(undefined);
        } else {
            setSelectedDay(value);
        }
    }

    const displayedMarker = selectedDay
        ? mapLocationData.filter(location => location.day === selectedDay)
        : mapLocationData;

    const containerStyle = {
        width: '100%',
        height: '100vh',
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP,
    })

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    useEffect(() => {
        if (map) {
            const bounds = new window.google.maps.LatLngBounds();
            mapLocationData.forEach(location => {
                bounds.extend(new window.google.maps.LatLng(location.latitude, location.longitude));
            });
            map.fitBounds(bounds);
        }
    }, [map]);

    return isLoaded ? (
        <MapLayout>
            <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    zoomControl: true,
                }}
            >
                <S.Top>
                    <S.LogoLink to='/'>
                        <S.Logo src={logo} alt='logo img'/>
                    </S.LogoLink>
                    <S.OptionWrapper>
                        {days.map((day, index) => (
                            <label key={index}>
                                <S.Input
                                    type='radio'
                                    name='option'
                                    value={day}
                                    onClick={handleOption}
                                    onChange={()=>{}}
                                    checked={day===selectedDay}
                                />
                                <S.Text selected={day===selectedDay}>
                                    {day}
                                </S.Text>
                            </label>
                        ))}
                    </S.OptionWrapper>
                </S.Top>
                {displayedMarker.map((location, index) => (
                    <Marker
                        key={index}
                        position={{ lat: location.latitude, lng: location.longitude }}
                        title={location.placeName}
                        icon={{
                            url: camera,
                            scaledSize: new window.google.maps.Size(75, 75),
                        }}
                    />
                ))}
            </GoogleMap>
        </MapLayout>
    ) : (
        <></>
    )
}

export default MissionMapPage;
