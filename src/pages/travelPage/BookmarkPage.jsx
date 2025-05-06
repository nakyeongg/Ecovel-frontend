import React from 'react';
import * as S from './BookmarkPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { bookmarkData } from '../../constant/bookmarkData';
import like from '../../assets/icons/main/like.png';

const BookmarkPage = () => {
    return (
        <Layout>
            <Header />
            {bookmarkData.map((travel, inex) => (
                <S.Wrapper>
                    <S.Left>
                        <S.TitleWrapper>
                            <S.Icon src={like}/>
                            <S.Title>{travel.city}</S.Title>
                        </S.TitleWrapper>
                        <S.HashtagsWrapper>
                            <S.Hashtag>#{travel.district}</S.Hashtag>
                            <S.Hashtag>#{travel.style}</S.Hashtag>
                            <S.Hashtag>#{travel.duration}</S.Hashtag>
                            <S.Hashtag>#{travel.transport[0]}</S.Hashtag>
                        </S.HashtagsWrapper>
                    </S.Left>
                    <S.Image src={travel.imageUrl}/>
                </S.Wrapper>
            ))}
        </Layout>
    )
}

export default BookmarkPage;
