import React, { useState } from 'react';
import axios from 'axios';
import './css/FormP.css';

function FormPayment() {
    const [payment, setPayment] = useState({
        idPayment: '',
        dt_pay: '',
        costPay: '',
        appointment: {
            idAppointment: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'idAppointment') {
            setPayment({
                ...payment,
                appointment: {
                    ...payment.appointment,
                    idAppointment: value
                }
            });
        } else {
            setPayment({
                ...payment,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            idPayment: payment.idPayment,
            dt_pay: payment.dt_pay,
            costPay: payment.costPay,
            appointment: { idAppointment: parseInt(payment.appointment.idAppointment, 10) }
        };

        axios.post('http://localhost:8080/payment/add', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Ошибка добавления данных!', error);
            });
    };

    return (
        <div>
            <div className="cardFP">
                <h2 className="titleFP">Форма оплаты</h2>
                <form className="form-data" onSubmit={handleSubmit}>
                    <div className="poleFP">
                        <label>Идентификатор оплаты</label>
                        <br /> <input type="number" name="idPayment" value={payment.idPayment} onChange={handleChange} className="vvodFP" />
                    </div>

                    <div className="poleFP">
                        <label>Дата оплаты</label>
                        <br /> <input type="date" name="dt_pay" value={payment.dt_pay} onChange={handleChange} className="vvodFP" />
                    </div>

                    <div className="poleFP">
                        <label>Стоимость</label>
                        <br /> <input type="number" name="costPay" value={payment.costPay} onChange={handleChange} className="vvodFP" />
                    </div>

                    <div className="poleFP">
                        <label>Идентификатор записи</label>
                        <br /> <input type="number" name="idAppointment" value={payment.appointment.idAppointment} onChange={handleChange} className="vvodFP" />
                    </div>

                    <div className="poleFP">
                        <button type="submit" className="butnFP">подтвердить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormPayment;
