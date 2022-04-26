import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Button } from 'react-bootstrap';
import ContextBasket from '../Context/Context';


const MainCard = ({ v }) => {
    const BasketHere = useContext(ContextBasket)
    return (
        <>
            <Col xs={4} className={'allcards'}>
                <Card style={{ width: '16rem'}} className={'card'} >
                    <Card.Img variant="top" src={v.strMealThumb}/>
                <Card.Body>
                    <Link to={"/meal/" + v.idMeal}>
                        <Card.Title style={{color:'black'}}>
                        {v.strMeal}
                        </Card.Title>
                    </Link>
                    <Button variant={ BasketHere.basket.includes(v) ? 'danger' : 'success'} onClick={() => BasketHere.toogle(v)} >{BasketHere.basket.includes(v) ? 'Удалить из корзины' : 'Добавить в корзину'}</Button>
                </Card.Body>
                </Card>
            </Col>
            {/* Same as */}
            
        </>
    )}
export default MainCard;