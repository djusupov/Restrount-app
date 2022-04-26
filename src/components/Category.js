import React, { useState, useEffect } from 'react';
import { ApiCategory } from '../Api/Api';
import { Link } from "react-router-dom";
import { Row, Card, Col } from 'react-bootstrap';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Category() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(ApiCategory)
            .then((response) => {
                AOS.init({
                    offset: 100,
                    duration: 500,
                    easing: 'ease-out-cubic',
                    delay: 100,
                })
                setCategory(response.data.categories)
                // console.log(response.data.categories);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <div className={'image'} ><h1 data-aos="zoom-in-up" className={'nameOfRes'}>JD restaurant</h1></div>
            <Row>
                <div className={'menu'}>
                    <h1>CATEGORIES</h1>
                </div>
                <hr />
                {category.map((v) => {
                    return (
                        <>
                            <Col xs={4} className={'allcards'} >
                                <Card style={{ width: '16rem' }} className={'card'}>
                                    <Card.Img variant="top" src={v.strCategoryThumb} />
                                    <Card.Body>
                                        <Link to={"/Category/" + v.strCategory}> <Card.Title>{v.strCategory}</Card.Title></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )
                })}
            </Row>
        </div>
    )
}
export default Category;