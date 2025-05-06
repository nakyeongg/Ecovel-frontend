import React, { useState, useRef } from 'react';
import * as S from './MyPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/common/Header';
import camera from '../../assets/icons/user/camera.svg';
import setting from '../../assets/icons/user/setting.svg';
import logout from '../../assets/icons/user/logout.svg';
import deleteIcon from '../../assets/icons/user/delete.svg';
import profileImage from '../../assets/images/양파쿵야.jpg';

const MyPage = () => {
    const [image, setImage] = useState();
    const [name, setName] = useState('user');
    const fileInputRef = useRef();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };
    
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
