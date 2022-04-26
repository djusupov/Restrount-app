import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap'
import { ApiMeals } from '../Api/Api';
import {useParams} from "react-router-dom";
import MainCard from './MainCard';
// import './App.css'


function Meals() {
    let { id } = useParams();

    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get(ApiMeals + id)
            .then((response) => {
                setCategory(response.data.meals)
                console.log(response.data.meals);
            })
            .catch((error) => {
                console.log();
            })
        return () => {
        }
    }, [])

    return (
        <div>
            <Row>
                {category.map((v) => {
                    return (<MainCard v={v} />)
                })}
            </Row>
        </div>
    )
}
export default Meals;
