import React, { useContext, useState, } from 'react';
import { Button, Row, Modal, Form } from 'react-bootstrap';
import ContextBasket from '../Context/Context';
import MainCard from './MainCard';


function Basket() {
    const BasketHere = useContext(ContextBasket);
    const [modal, setModal] = useState(false)

    const modalWindow = () => {
        setModal(true)
    }
    const modalHide = () => {
        setModal(false)
    }
    return (
        <div>
            {BasketHere.basket.length == 0 ? <div className={"basketDiv"}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <h1>КОРЗИНА ПУСТА</h1>
                    <p style={{ color: 'black' }}>Добавьте блюда и закажите</p>
                </div>
            </div> : <>
                <div>
                    <h1>
                        Вaшей корзине всего :({BasketHere.basket.length})
                    </h1>
                    <Row>
                        {BasketHere.basket.map((v) => {
                            return (<MainCard v={v} />)
                        })}
                    </Row>
                </div>
                <Button onClick={() => modalWindow()}>Order {BasketHere.basket.length} {BasketHere.basket.length == 1 ? 'meal' : 'meals'}</Button>
            </>}
            {modal ?
                <Modal show={modalWindow} onHide={modalHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Потвердите заказ</Modal.Title>
                    </Modal.Header>
                    Ваше Ф.И.О<Form.Control type="text" placeholder="Ф.И.О" />
                    Ваш телефон номер<Form.Control type="number" />
                    Адрес доставки<Form.Control type="text" placeholder="aдресс" />

                    <Modal.Footer>
                        <Button variant="success" >
                            Потвердить
                        </Button>
                        <Button variant="danger" onClick={modalHide}>
                            Отказатся
                        </Button>
                    </Modal.Footer>
                </Modal> : null}


        </div>
    )
}
export default Basket;
