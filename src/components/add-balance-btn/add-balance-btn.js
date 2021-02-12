import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './add-balance-btn.css';

export default class AddBalanceButton extends Component {
    state = {
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
    AddBalance = () => {
        const inputAdd = document.getElementById("inputAdd");
        const currentBalance = document.getElementById("currentBalanceTitle");
        const monthAddBalance = document.getElementById("monthAddBalanceTitle");
        const newCurrentBalance = parseFloat(inputAdd.value) + parseFloat(currentBalance.innerText);
        const newMonthAddBalance = parseFloat(inputAdd.value) + parseFloat(monthAddBalance.innerText)
        currentBalance.innerText = newCurrentBalance;
        monthAddBalance.innerText = newMonthAddBalance;
        localStorage.setItem('currentBalance', newCurrentBalance);
        localStorage.setItem('monthAddBalance', newMonthAddBalance);
        this.CloseModal();
    }
    render() {
        const { show } = this.state;
        return (
            <>
                <Button onClick={this.ShowModal} className="add-button" variant="success">Добавить деньги</Button>
                <Modal show={show}>
                    <Modal.Header>Добавть деньги</Modal.Header>
                    <Modal.Body>Введите сумму</Modal.Body>
                    <Form.Control id="inputAdd" style={{ width: 460, marginLeft: 15 }} type="number" placeholder="Введите сумму" />
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.CloseModal}>Отмена</Button>
                        <Button variant="primary" onClick={this.AddBalance}>Добавить</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}