import React, { useState, useEffect } from 'react';
import * as S from './RegionOptionPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { GreenButton } from './../../components/GreenButton';
import { useNavigate, useLocation } from "react-router-dom";
import mainAxios from './../../apis/mainAxios';

const DistrictOptionPage = () => {
    
    const [selectedDistrict, setSelectedDistrict] = useState();
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    const { state } = useLocation();
    const [selectedRegionText, setSelectedRegionText] = useState(state.city);
    const [districtData, setDistrictData] = useState([]);

    const getDistricts = async () => {
        try {
            const response = await mainAxios.get(`/travel/districts?city=${selectedRegionText}`);
            console.log('districts list', response.data.result.districts);
            const districts = response.data.result.districts;
            const formattedDistrictsData = districts.map((text, index) => ({
                text: text,
                value: index,
            }))
            setDistrictData(formattedDistrictsData);
        } catch(error) {
            console.log('getDistricts error', error);
        }
    }

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
        const selectedDistrictText = districtData.find(district => district.value === selectedDistrict)?.text;
        navigate('/travel/style', {state: {
            selectedRegionText,
            selectedDistrictText,
        }});
    }
    
    useEffect(() => {
        setDisable(selectedDistrict === undefined);
    }, [selectedDistrict]);

    useEffect(() => {
        getDistricts();
    }, [])

    return (
        <Layout>
            <Header />
            <S.Desc>Please select a district to travel to </S.Desc>
            <S.DistrictWrapper>
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
            </S.DistrictWrapper>
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
