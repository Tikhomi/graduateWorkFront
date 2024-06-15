import React, { useState } from 'react';
import axios from 'axios';
import './css/FormC.css';

function FormClient() {
    const [client, setClient] = useState({
        idClient: '',
        nameCl: '',
        lastnameCl: '',
        patronymicCl: '',
        birthdayCl: '',
        id_user: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({
            ...client,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            idClient: client.idClient,
            nameCl: client.nameCl,
            lastnameCl: client.lastnameCl,
            patronymicCl: client.patronymicCl,
            birthdayCl: client.birthdayCl,
            users: { id_user: parseInt(client.id_user, 10) },
        };

        axios.post('http://localhost:8080/client/add', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Ошибка добавления данных!', error);
            });
    };

    return (
        <div>
            <div className="cardFCl">
                <h2 className="titleFCl">Форма пациентов</h2>
                <form className="form-data" onSubmit={handleSubmit}>
                    <div className="poleFCl">
                        <label>Идентификатор пациента</label>
                        <br/> <input type="number" name="idClient" value={client.idClient} onChange={handleChange} className="vvodFCl"/>
                    </div>

                    <div className="poleFCl">
                        <label>Имя пациента</label>
                        <br/> <input type="text" name="nameCl" value={client.nameCl} onChange={handleChange} className="vvodFCl"/>
                    </div>

                    <div className="poleFCl">
                        <label>Фамилия пациента</label>
                        <br/> <input type="text" name="lastnameCl" value={client.lastnameCl} onChange={handleChange} className="vvodFCl"/>
                    </div>

                    <div className="poleFCl">
                        <label>Отчество пациента</label>
                        <br/> <input type="text" name="patronymicCl" value={client.patronymicCl} onChange={handleChange} className="vvodFCl"/>
                    </div>

                    <div className="poleFCl">
                        <label>Дата рождения</label>
                        <br/> <input type="date" name="birthdayCl" value={client.birthdayCl} onChange={handleChange} className="vvodFCl"/>
                    </div>

                    <div className="poleFCl">
                        <label>Идентификатор пользователя</label>
                        <br/> <input type="number" name="id_user" value={client.id_user} onChange={handleChange} className="vvodFCl"/>
                    </div>

                    <div className="poleFCl">
                        <button type="submit" className="butnFCl">подтвердить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormClient;
