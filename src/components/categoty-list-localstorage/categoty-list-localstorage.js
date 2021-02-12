import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import CategotyLocalStorage from '../category-localstorage';

export default class CategoryListLocalStorage extends Component {
    render() {
        localStorage.setItem('monthAddBalance', 0);
        localStorage.setItem('monthMinusBalance', 0);
        const monthAddBalance = document.getElementById("monthAddBalanceTitle");
        const monthMinusBalance = document.getElementById("monthMinusBalanceTitle");
        monthAddBalance.innerText = 0;
        monthMinusBalance.innerText = 0;
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Категория</th>
                        <th>Потрачено</th>
                    </tr>
                </thead>
                <tbody>
                    <CategotyLocalStorage id="health" title="Здоровье" />
                    <CategotyLocalStorage id="fitnes" title="Фитнес" />
                    <CategotyLocalStorage id="eat" title="Еда" />
                    <CategotyLocalStorage id="happy" title="Развлечение" />
                    <CategotyLocalStorage id="clothes" title="Одежда" />
                    <CategotyLocalStorage id="transport" title="Транспорт" />
                    <CategotyLocalStorage id="call" title="Связь" />
                    <CategotyLocalStorage id="car" title="Машина" />
                    <CategotyLocalStorage id="gadget" title="Гаджеты" />
                </tbody>
            </Table>
        )
    }
}