import React, { useState } from 'react';
import axios from 'axios';
import './css/FormRedactor.css';

function RedactorF() {
    const [client, setClient] = useState({
        nameCl: '',
        lastnameCl: '',
        patronymicCl: '',
        birthdayCl: ''
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
            nameCl: client.nameCl,
            lastnameCl: client.lastnameCl,
            patronymicCl: client.patronymicCl,
            birthdayCl: client.birthdayCl,
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
            <div className="cardRed">
                <h2 className="titleRed">Форма пациентов</h2>
                <form className="form-data" onSubmit={handleSubmit}>
                    <div className="poleRed">
                        <label><p className="textRed">Имя пациента</p></label>
                            <br/> <input type="text" name="nameCl" value={client.nameCl} onChange={handleChange} className="vvodRed"/>
                    </div>

                    <div className="poleRed">
                        <label><p className="textRed">Фамилия пациента</p></label>
                            <br/> <input type="text" name="lastnameCl" value={client.lastnameCl} onChange={handleChange} className="vvodRed"/>
                    </div>

                    <div className="poleRed">
                        <label><p className="textRed">Отчество пациента</p></label>
                            <br/> <input type="text" name="patronymicCl" value={client.patronymicCl} onChange={handleChange} className="vvodRed"/>
                    </div>

                    <div className="poleRed">
                        <label><p className="textRed">Дата рождения</p></label>
                            <br/> <input type="date" name="birthdayCl" value={client.birthdayCl} onChange={handleChange} className="vvodRed"/>
                    </div>

                    <div className="poleRed">
                        <button type="submit" className="butnRed">сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RedactorF;
