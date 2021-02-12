import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Card, Modal, Button } from 'react-bootstrap';
import CategoryListLocalStorage from '../categoty-list-localstorage';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBalance: props.currentBalance,
            monthAddBalance: props.monthAddBalance,
            monthMinusBalance: props.monthMinusBalance,
            show: props.show
        }
    }

    ShowModal = () => {
        this.setState({
            show: true
        })
    }

    CloseModal = () => {
        this.setState({
            show: false
        })
    }

    render() {
        const { currentBalance, monthAddBalance, monthMinusBalance, show } = this.state;
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#">Money Control</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <NavDropdown.Divider />
                            <Nav.Link onClick={this.ShowModal}>Сгенерировать отчёт</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Card border="secondary" style={{ width: '25rem', margin: '0 auto', marginTop: '45px' }}>
                    <Card.Body>
                        <Card.Title>Ваш баланс: <span id="currentBalanceTitle">{currentBalance}</span></Card.Title>
                        <Card.Text style={{ color: "#3ae03a" }}>Пополнено за месяц: <span id="monthAddBalanceTitle" >{monthAddBalance}</span></Card.Text>
                        <Card.Text style={{ color: "#e61717" }}>Потрачено за месяц: <span id="monthMinusBalanceTitle">{monthMinusBalance}</span></Card.Text>
                    </Card.Body>
                </Card>
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>Отчёт</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <CategoryListLocalStorage/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.CloseModal} variant="secondary">Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}