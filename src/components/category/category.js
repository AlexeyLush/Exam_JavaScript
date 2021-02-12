import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './category.css';
import '../../css/all.min.css'

export default class Category extends Component {
    state = {
        title: this.props.title,
        icon: this.props.icon,
        background: this.props.background,
        show: this.props.show
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

    clickForCategory = () => {
        this.ShowModal();
    }

    MinusBalance = () => {
        const inputAdd = document.getElementById("inputAdd");
        const currentBalance = document.getElementById("currentBalanceTitle");
        const monthMinusBalance = document.getElementById("monthMinusBalanceTitle");
        const newCurrentBalance = parseFloat(currentBalance.innerText) - parseFloat(inputAdd.value) ;
        const newMonthMinusBalance = parseFloat(inputAdd.value) + parseFloat(monthMinusBalance.innerText)
        currentBalance.innerText = newCurrentBalance;
        monthMinusBalance.innerText = newMonthMinusBalance;
        localStorage.setItem('currentBalance', newCurrentBalance);
        localStorage.setItem('monthMinusBalance', newMonthMinusBalance);


        const categoryBalance = parseFloat(localStorage.getItem(this.props.id));
        const newCategoryBalance = categoryBalance + parseFloat(inputAdd.value)
        localStorage.setItem(this.props.id, newCategoryBalance);
        this.CloseModal();
    }

    render() {
        const { title, icon, background, show } = this.state;
        return (
            <>
            <div onClick={this.clickForCategory} className="category-container" style={{ background }} >
                <i className={icon}></i>
                <p>{title}</p>
            </div>
            <Modal show={show}>
                <Modal.Header>Добавть деньги</Modal.Header>
                <Modal.Body>Введите сумму</Modal.Body>
                <Form.Control id="inputAdd" style={{ width: 460, marginLeft: 15 }} type="number" placeholder="Введите сумму" />
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.CloseModal}>Отмена</Button>
                    <Button variant="primary" onClick={this.MinusBalance}>Добавить</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}