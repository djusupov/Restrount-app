import React, { useState, useEffect } from 'react';
import {
    useParams,
} from "react-router-dom";
import { Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import MainCard from './MainCard';
import { ApiSearch } from '../Api/Api';


function Searcher() {
    const [search, setSearch] = useState([]);
    const params = useParams();


    useEffect(() => {
        SearchApi();
    }, [params.idForSearch]);

    const SearchApi = () => {
        axios.get(ApiSearch + params.idForSearch)
            .then((response) => {
                const data = response.data.meals
                // console.log(data);
                setSearch(data);
            })
            .catch((error) => {
                console.log();
            })
    }
    return (
        <>
            <Row>
                {search !== null ? search.map((v) => {
                    return (
                        <MainCard v={v} />
                    )
                }) : null}
            </Row>
        </>
    )

}
export default Searcher;