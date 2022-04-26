import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { ApiMeal } from '../Api/Api'



function ExactProduct() {
    let { PrID } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(ApiMeal + PrID)
            .then((response) => {
                setProduct(response.data.meals[0])
            })
            .catch((error) => {
                console.log(error);
            })
        return () => {

        }
    }, [])
    return (
        <>
            <div className={'inline'}>
                <Card style={{ width: '25rem' , display:'flex' , justifyContent:'end'}}>
                        <Card.Img variant="top" src={product.strMealThumb} />
                        <Card.Body>
                            <h4>
                                TAGS:{product.strTags}
                                <hr />
                                AREA : {product.strArea}
                            </h4>
                        </Card.Body>
                        <h5>
                            Description : {product.strInstructions}
                        </h5>
                </Card>
            </div>

        </>
    )
}
export default ExactProduct;