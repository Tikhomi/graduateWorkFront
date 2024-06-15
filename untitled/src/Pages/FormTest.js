import React, { Component } from 'react';
import "./css/FormTest.css";

export default class FormTest extends Component {
    render() {
        return (
            <div className="FormTest">
                <h1 className="titleTest">Формы добавления данных</h1>
                <a className="textTest" href="/DoctorF">Переход к форме врачи.</a>
                <br/> <a className="textTest" href="/PaymentF">Переход к форме оплата.</a>
                <br/> <a className="textTest" href="/ServiceF">Переход к форме услуги.</a>
                <br/> <a className="textTest" href="/ClientF">Переход к форме пациенты.</a>
                <br/> <a className="textTest" href="/AppointmentF">Переход к форме запись.</a>
                <h1 className="titleTest">Формы удаления данных</h1>
                <a className="textTest" href="/DeleteD">Переход к удалению врачей.</a>
                <br/> <a className="textTest" href="/DeleteS">Переход к удалению услуг.</a>
                <br/> <a className="textTest" href="/DeleteP">Переход к удалению пациентов.</a>
            </div>
        );
    }
}

