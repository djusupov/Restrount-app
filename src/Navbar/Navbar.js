import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Form, FormControl, Button, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Api } from '../Api/Api';
import ContextBasket from '../Context/Context';

function Navbar2() {

    const basket1 = useContext(ContextBasket)

    const [navbar, setNavbar] = useState([]);
    const [value, setValue] = useState('');
    const [country, setCountry] = useState('')
    let historySearch = useHistory();
    let historyCountry = useHistory();
    useEffect(() => {
        axios.get(Api)
            .then((response) => {
                setNavbar(response.data.meals);
                // console.log(response.data.meals);
            })
            .catch((error) => {
                console.log();
            })
        return () => {
        }
    }, []);

    const handleClick = () => {
        historySearch.push(`/Searcher/${value}`);
    }

    const change = (p) => {
        setValue(p)
        console.log(value);
    }

    const changeCountry = (v) => {
        historyCountry.push(`/CountryCategory/${v.strArea}`)
        console.log(country);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={"bg"} variant="dark">
                <Container>
                    <Navbar.Brand href="/" style={{ color: 'black', fontSize: '20px' }}>Главная</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={'/Basket'} style={{ color: 'black', fontSize: '20px' }}>Корзина({basket1.basket.length})</Nav.Link>
                            <div className="droptown">
                                <NavDropdown title="Страны" id="basic-nav-dropdown">
                                    <NavDropdown.Item >{navbar.map((v, i) => {
                                        return (
                                            <NavDropdown.Item onClick={() => changeCountry(v)}> {v.strArea} </NavDropdown.Item>
                                        )
                                    })}</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                style={{
                                    width: '500px'
                                }}
                                onChange={(e) => change(e.target.value)}
                                type="search"
                                placeholder="Поиск"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" onClick={() => handleClick()}>Поиск</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navbar2;