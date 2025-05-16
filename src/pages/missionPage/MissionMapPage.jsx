import React, { useState, useEffect, useRef } from 'react';
import * as S from './MissionMapPage.styled';
import { MapLayout } from '../../layout/MapLayout';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import logo from '../../assets/images/logo.png';
import camera from '../../assets/icons/mission/camera.png';
import rotate from '../../assets/icons/mission/rotate.png';
import success from '../../assets/icons/mission/success.png';
import notice from '../../assets/icons/mission/notice.png';
import { ImageModal } from '../../components/mission/ImageModal';
import { GuideModal } from '../../components/mission/GuideModal';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import mainAxios from '../../apis/mainAxios';
import aiAxios from '../../apis/aiAxios';

const MissionMapPage = () => {
    const { id } = useParams(); // planId
    const [userId, setUserId] = useState();
    const [selectedDay, setSelectedDay] = useState();
    const [faceImage, setFaceImage] = useState();
    const [map, setMap] = useState(null);
    const [mapLocationData, setMapLocationData] = useState([]);
    const [totalDay, setTotalDay] = useState(0) // How many days in total
    const [missionDay, setMissionDay] = useState(0); // How many days has it been today
    const [todayMission, setTodayMission] = useState('');
    const [placeName, setPlaceName] = useState();
    const [state, setState] = useState(null); // ongoing, complete, retry, error, finish
    const [completed, setCompleted] = useState(false);
    const [image, setImage] = useState();
    const fileInputRef = useRef();
    const navigate = useNavigate();
    // console.log('today mission', completed);
    // console.log('totalDay',totalDay,'missionDay',missionDay);
    const days = Array.from(new Set(mapLocationData.map(data => data.day)));

    const handleOption = (event) => {
        const value = event.target.value;
        if (value===selectedDay) {
            setSelectedDay(undefined);
        } else {
            setSelectedDay(value);
        }
    }

    const handleModal = (value) => {
        if (value === missionDay) {
            setState('ongoing');
        } else {
            setState('error');
        }
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
            handleImage(file);
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
            console.log('handleLocation success', response);
            setMapLocationData(response.data.result);
            setTotalDay(response.data.result.length);
        } catch(error) {
            console.log('handleLocation error', error);
        }
    }
    
    const handleName = async () => {
        try {
            const response = await mainAxios.get('/api/users/me');
            console.log('user info', response.data.result);
            setUserId(response.data.result.id);
            console.log('userId', userId);
        } catch(error) {
            console.log('handleName error', error);
        }
    }

    const getImage = async () => {
        try {
            console.log('userIduserIduserIduserId', userId);
            const response = await aiAxios.get(`/users/profile-image?userId=${userId}`);
            console.log('getImage success', response);
            if (response.data.result) {
                setFaceImage(response.data.result);
            } else {
                // alert('I don't have a registered face image, please register your face first.');
                // navigate('/mypage');
            }
        } catch (error) {
            console.error('getImage error', error);
            alert('Failed to load profile image.');
            navigate('/mypage');
        }
    };

    // API connection for performing missions

    // 1. today's mission completed or not
    const handleTodayStatus = async () => {
        try {
            const response = await mainAxios.get(`/mission/${id}/today-status`);
            console.log('handleTodayStatus success', response);
            const completed = response.data.result.completed;
            console.log('completed?',completed);
            if (completed) {
                console.log("today's mission completed");
                setState('completed');
                setCompleted(true);
            } else {
                console.log("today's mission not completed");
                setCompleted(false);
            }
        } catch(error) {
            console.log('handleTodayStatus error', error);
        }
    }
    // 2. Today's mission
    const handleTodayMission = async () => {
        try {
            const response = await mainAxios.get(`/mission/${id}/today`);
            console.log('handleTodayMission success', response);
            setTodayMission(response.data.result.description);
            setPlaceName(response.data.result.placeName);
            const dayString = response.data.result.day; // 'DAY 2'
            const dayNumber = parseInt(dayString.replace('DAY ', ''), 10); // 2
            setMissionDay(dayNumber);
            console.log('missionDay',missionDay);
        } catch(error) {
            console.log('handleTodayMission error', error);
        }
    }
    // 3. mission picture
    const handleImage = async (file) => {
        if (faceImage===null) return ;
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("day", missionDay);
        formData.append("placeId", placeName);
        formData.append("image", file);
        formData.append("userFaceUrl", faceImage);

        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
        try {
            console.log('planId', id);
            const response = await mainAxios.post(`/mission/${id}/verify`, (
                formData
            ))
            console.log('handleImage success', response);
            const result = response.data.result.result
            console.log("today's mission result",result);
            if (result==="fail") {
                setState('retry');
                setCompleted(false);
                setImage(null);
            } else {
                setState('complete');
                setCompleted(true);
            }
            // Today is the last day and we need to see if we completed the mission today
            if (result && (totalDay===missionDay)) {
                setState('finish')
            }
        }
        catch(error) {
            console.log('미션 인증 요청 실패', error);
            setCompleted(false);
        }
    }
    // 4. finish travel
    const handleFinish = async () => {
        try {
            const response = await mainAxios.post(`/mission/complete?planId=${id}`);
            console.log('handleFinish success', response);
            navigate('/main');
        } catch(error) {
            console.log('handleFinish error', error);
        }
    }

    useEffect(() => {
        if (map && mapLocationData.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            mapLocationData.forEach(location => {
                bounds.extend(new window.google.maps.LatLng(location.latitude, location.longitude));
            });
            map.fitBounds(bounds);
        }
    }, [map, mapLocationData]);

    useEffect(() => {
        if (id) {
            handleName();
            getImage();
            handleLocation();
            handleTodayStatus();
            handleTodayMission();
        }
    }, [id]);

    useEffect(() => {
        if (userId) {
            getImage();
        }
    }, [userId]);

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
                            onClick={() => handleModal(index+1)}
                        />
                    ))}
                </GoogleMap>
            </MapLayout>
            {state==='ongoing' && (
                <ImageModal
                    icon={camera}
                    title={todayMission}
                    buttonText='Certify'
                    backClick={() => setState(null)}
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    image={image}
                />
            )}
            {state==='retry' && (
                <ImageModal
                    icon={rotate}
                    title={todayMission}
                    buttonText='Retry'
                    backClick={() => setState(null)}
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    image={image}
                />
            )}
            {state==='complete' && (
                <GuideModal
                    icon={success}
                    title='Mission Complete!'
                    buttonText='Go to Home'
                    onClick={handleCompleteButton}
                />
            )}
            {state==='error' && (
                <GuideModal
                    icon={notice}
                    title={`Please complete Day${missionDay} first !`}
                    buttonText={`Go to Day${missionDay}`}
                    onClick={() => {
                        if (completed) {
                            setState('complete');
                        } else {
                            setState('ongoing');
                        }
                    }}
                />
            )}
            {state==='finish' && (
                <GuideModal
                    icon={notice}
                    title={`Finish your trip !`}
                    buttonText='Finish'
                    onClick={handleFinish}
                />
            )}
        </>
    ) : (
        <></>
    )
}

export default MissionMapPage;
