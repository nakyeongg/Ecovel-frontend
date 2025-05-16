import React, { useState, useRef, useEffect } from 'react';
import * as S from './MyPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import camera from '../../assets/icons/user/camera.svg';
import setting from '../../assets/icons/user/setting.svg';
import logout from '../../assets/icons/user/logout.svg';
import deleteIcon from '../../assets/icons/user/delete.svg';
import mainAxios from './../../apis/mainAxios';
import aiAxios from './../../apis/aiAxios';

const MyPage = () => {
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [userId, setUserId] = useState();
    const fileInputRef = useRef();

    const handleName = async () => {
        try {
            const response = await mainAxios.get('/api/users/me');
            console.log('user info', response.data.result);
            setName(response.data.result.nickname);
            setUserId(response.data.result.id);
            console.log('name and userId', name, userId);
        } catch(error) {
            console.log('handleUserInfo error', error);
        }
    }

    const getImage = async () => {
        try {
            if (userId) {
                const response = await aiAxios.get(`/users/profile-image?userId=${userId}`);
                console.log('import image', response.data);
                setImage(response.data.result);
            } else {
                console.log('No registered image');
            }
        } catch(error) {
            console.log(error);
        }
    }

    const handleImage = async (file) => {
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("file", file);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        try {
            const response = await aiAxios.post('/users/profile-image', (
                formData
            ))
            console.log('handleImage success', response);
            if (response.data.success) {
                setImage(URL.createObjectURL(file));
                console.log('image',image);
            } else {
                alert('Face registration failed, please try again.');
            }
        } catch(error) {
            console.log('handleImage error', error);
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && userId) {
            handleImage(file);
        }
    };

    useEffect(() => {
        handleName();
    }, []);

    useEffect(() => {
        getImage();
    }, [userId]);
    
    return (
        <Layout>
            <Header />
                {image ? (
                    <S.Profile src={image} />
                ): (
                    <S.ProfileWrapper onClick={() => fileInputRef.current.click()}>
                        <S.ProfileButton 
                            type='file' 
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                        />
                        <S.Camera src={camera}/>
                    </S.ProfileWrapper>
                )}
            <S.Name>{name}</S.Name>
            <S.Title>Service</S.Title>
            <S.Wrapper>
                <S.Icon src={setting} />
                <S.Button>Edit Profile</S.Button>
            </S.Wrapper>
            <S.Wrapper>
                <S.Icon src={logout} />
                <S.Button>Logout</S.Button>
            </S.Wrapper>
            <S.Wrapper>
                <S.Icon src={deleteIcon} />
                <S.Button>Delete Account</S.Button>
            </S.Wrapper>
        </Layout>
    )
}

export default MyPage;
