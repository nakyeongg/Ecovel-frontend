import React, { useState, useEffect } from 'react';
import * as S from './RegionOptionPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { districtData } from './../../constant/districtData';
import { GreenButton } from './../../components/GreenButton';
import { useNavigate } from "react-router-dom";

const DistrictOptionPage = () => {
    
    const [selectedDistrict, setSelectedDistrict] = useState();
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    const handleDistrict = (event) => {
        const value = Number(event.target.value);
        console.log('click', value);
        if (value===selectedDistrict) {
            setSelectedDistrict(undefined);
        } else {
            setSelectedDistrict(value);
        }
    }

    const handleButton = () => {
        navigate('/travel/style');
    }
    
    useEffect(() => {
        setDisable(selectedDistrict === undefined);
    }, [selectedDistrict]);

    return (
        <Layout>
            <Header />
            <S.Desc>Please select a district to travel to </S.Desc>
            <S.Wrapper>
                {districtData.map((district, index) => (
                    <label key={index}>
                        <S.Input
                            type='radio'
                            name='rank'
                            value={district.value}
                            onClick={handleDistrict}
                            onChange={()=>{}}
                            checked={district.value===selectedDistrict}
                        />
                        <S.Text selected={index===selectedDistrict}>
                            {district.text}
                        </S.Text>
                    </label>
                ))}
            </S.Wrapper>
            <S.Buttonwrapper>
                <GreenButton
                    text='Next'
                    disabled={disable}
                    onClick={handleButton}
                />                
            </S.Buttonwrapper>
        </Layout>
    )
}

export default DistrictOptionPage;
