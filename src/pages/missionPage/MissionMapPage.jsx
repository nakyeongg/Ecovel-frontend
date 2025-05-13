import React, { useState, useEffect, useRef } from 'react';
import * as S from './MissionMapPage.styled';
import { MapLayout } from '../../layout/MapLayout';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import logo from '../../assets/images/logo.png';
import camera from '../../assets/icons/mission/camera.png';
import rotate from '../../assets/icons/mission/rotate.png';
import success from '../../assets/icons/mission/success.png';
import notice from '../../assets/icons/mission/notice.png';
import { mapLocationData } from '../../constant/mapLocationData';
import { ImageModal } from '../../components/mission/ImageModal';
import { GuideModal } from '../../components/mission/GuideModal';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import mainAxios from '../../apis/mainAxios';

const MissionMapPage = () => {
    const { id } = useParams();
    const [selectedDay, setSelectedDay] = useState();
    const [map, setMap] = useState(null);
    // const [mapLocationData, setMapLocationData] = useState();
    const [state, setState] = useState(null); // ongoing, complete, retry, error
    const [image, setImage] = useState();
    const [name, setName] = useState('user');
    const fileInputRef = useRef();
    const navigate = useNavigate();
    
    const days = Array.from(new Set(mapLocationData.map(data => data.day)));

    const handleOption = (event) => {
        const value = event.target.value;
        if (value===selectedDay) {
            setSelectedDay(undefined);
        } else {
            setSelectedDay(value);
        }
    }

    const handleModal = () => {
        setState('ongoing');
        console.log(state);
    }

    const handleCompleteButton = () => {
        setState(null);
        navigate('/main');
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };


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
    
    const handleLocation = async () => {
        try {
            const response = await mainAxios.get(`/mission/${id}/locations`);
            console.log('미션 좌표 요청 성공', response);
            // setMapLocationData(response.data.result);
        } catch(error) {
            console.log('미션 좌표 요청 실패', error);
        }
    }

    useEffect(() => {
        if (map) {
            const bounds = new window.google.maps.LatLngBounds();
            mapLocationData.forEach(location => {
                bounds.extend(new window.google.maps.LatLng(location.latitude, location.longitude));
            });
            map.fitBounds(bounds);
        }
    }, [map]);

    useEffect(() => {
        handleLocation();
    },[]);

    return isLoaded ? (
        <>
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
                        <S.LogoLink to='/main'>
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
                            onClick={handleModal}
                        />
                    ))}
                </GoogleMap>
            </MapLayout>
            {state==='ongoing' ? (
                <ImageModal
                    icon={camera}
                    title='Photo Mission'
                    buttonText='Certify'
                    backClick={() => setState(null)}
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    image={image}
                />
            ) : state==='retry' ? (
                <ImageModal
                    icon={rotate}
                    title='Please upload an image following the guidelines.'
                    buttonText='Retry'
                    backClick={() => setState(null)}
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    image={image}
                />
            ) : state==='complete' ? (
                <GuideModal
                    icon={success}
                    title='Mission Complete!'
                    buttonText='Go to Home'
                    onClick={handleCompleteButton}
                />
            ) :  state==='error' ? (
                <GuideModal
                    icon={notice}
                    title='Please complete Day1 first !'
                    buttonText='Go to Day1'
                    onClick={() => setState(null)}
                />
            ) : null}
        </>
    ) : (
        <></>
    )
}

export default MissionMapPage;
