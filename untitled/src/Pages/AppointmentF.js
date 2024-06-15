import React, { useState } from 'react';
import axios from 'axios';
import './css/FormA.css';

function FormAppointment() {
    const [appointment, setAppointment] = useState({
        idAppointment: '',
        dtRec: '',
        dtAp: '',
        description: '',
        userDoc: '',
        userCl: '',
        status: '',
        id_service: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment({
            ...appointment,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            idAppointment: parseInt(appointment.idAppointment, 10),
            dtRec: appointment.dtRec,
            dtAp: appointment.dtAp,
            description: appointment.description,
            service: { idService: parseInt(appointment.id_service, 10) },
            status: { idStatus: parseInt(appointment.status, 10) },
            userCl: { idClient: parseInt(appointment.userCl, 10) },
            userDoc: { idDoctor: parseInt(appointment.userDoc, 10) }
        };

        axios.post('http://localhost:8080/appointment/add', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Ошибка добавления данных!', error);
            });
    };
    return (
        <div>
            <div className="cardFA">
                <h2 className="titleFA">Форма записи</h2>
                <form className="form-data" onSubmit={handleSubmit}>
                    <div className="poleFA">
                        <label>Идентификатор записи</label>
                        <br/> <input type="number" name="idAppointment" value={appointment.idAppointment} onChange={handleChange} className="vvodFA"/>
                    </div>

                    <div className="poleFA">
                        <label>Дата записи</label>
                        <br/> <input
                        type="datetime-local"
                        name="dtRec"
                        value={appointment.dtRec}
                        onChange={handleChange}
                        className="vvodFA"/>
                    </div>

                    <div className="poleFA">
                        <label>Дата приёма</label>
                        <br/>
                        <input
                            type="datetime-local"
                            name="dtAp"
                            value={appointment.dtAp}
                            onChange={handleChange}
                            className="vvodFA"
                        />
                    </div>

                    <div className="poleFA">
                        <label>Описание услуги</label>
                        <br/> <input type="text" name="description" value={appointment.description} onChange={handleChange} className="vvodFA"/>
                    </div>

                    <div className="poleFA">
                        <label>Идентификатор врача</label>
                        <br/> <input type="number" name="userDoc" value={appointment.userDoc} onChange={handleChange} className="vvodFA"/>
                    </div>

                    <div className="poleFA">
                        <label>Идентификатор пациента</label>
                        <br/> <input type="number" name="userCl" value={appointment.userCl} onChange={handleChange} className="vvodFA"/>
                    </div>

                    <div className="poleFA">
                        <label>Статус</label>
                        <br/> <input type="number" name="status" value={appointment.status} onChange={handleChange} className="vvodFA"/>
                    </div>

                    <div className="poleFA">
                        <label>Идентификатор услуги</label>
                        <br/> <input type="number" name="id_service" value={appointment.id_service}
                                     onChange={handleChange} className="vvodFA"/>
                    </div>

                    <div className="poleFA">
                        <button type="submit" className="butnFA">подтвердить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormAppointment;
