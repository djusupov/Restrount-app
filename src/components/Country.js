import axios from 'axios';
import {ApiCountry} from '../Api/Api'
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card , Col , Row} from 'react-bootstrap';
import MainCard from './MainCard';

function Country() {
    const param = useParams()
    const [countries, setCountries] = useState([])
    useEffect(() => {
        Country();
    }, [param.idForCountries])

    const Country = () => {
        axios.get(ApiCountry + param.idForCountries)
            .then((response) => {
                setCountries(response.data.meals);
                console.log(countries);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <Row>
                {countries.map((v) => {
                    return (
                        <MainCard v = {v}/>
                    )
                })
                }
            </Row>
        </>
    )
}
export default Country;