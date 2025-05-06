import React from 'react';
import * as S from './BookmarkPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { TravelInfo } from '../../components/travel/TravelInfo';
import { bookmarkData } from '../../constant/bookmarkData';
import like from '../../assets/icons/main/like.png';

const BookmarkPage = () => {
    return (
        <Layout>
            <Header />
            {bookmarkData.map((travel, inex) => (
                <TravelInfo
                    icon={like}
                    title={travel.city}
                    hashtag1={travel.district}
                    hashtag2={travel.style}
                    hashtag3={travel.duration}
                    hashtag4={travel.transport[0]}
                    image={travel.imageUrl}
                />
            ))}
        </Layout>
    )
}

export default BookmarkPage;
