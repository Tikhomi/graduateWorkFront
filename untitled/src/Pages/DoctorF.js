import React, { useState } from 'react';
import axios from 'axios';
import './css/FormD.css';

function FormDoctors() {
    const [doctor, setDoctor] = useState({
        idDoctor: '',
        nameDoc: '',
        lastnameDoc: '',
        patronymicDoc: '',
        birthdayDoc: '',
        experience: '',
        idUser: '',
        id_specification: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({
            ...doctor,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            idDoctor: doctor.idDoctor,
            nameDoc: doctor.nameDoc,
            lastnameDoc: doctor.lastnameDoc,
            patronymicDoc: doctor.patronymicDoc,
            birthdayDoc: doctor.birthdayDoc,
            experience: parseInt(doctor.experience, 10),
            users: { idUser: parseInt(doctor.idUser, 10) },
            specificationDics: { idSpecification: parseInt(doctor.id_specification, 10) }
        };


        axios.post('http://localhost:8080/doctor/add', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Ошибка добавления данных!', error);
            });
    };

    return (
        <div>
            <div className="cardFD">
                <h2 className="titleFD">Форма врачей</h2>
                <form className="form-data" onSubmit={handleSubmit}>
                    <div className="poleFD">
                        <label>Идентификатор</label>
                        <br /> <input type="number" name="idDoctor" value={doctor.idDoctor} onChange={handleChange} className="vvodFD" />
                    </div>

                    <div className="poleFD">
                        <label>Имя</label>
                        <br /> <input type="text" name="nameDoc" value={doctor.nameDoc} onChange={handleChange} className="vvodFD" />
                    </div>

                    <div className="poleFD">
                        <label>Фамилия</label>
                        <br /> <input type="text" name="lastnameDoc" value={doctor.lastnameDoc} onChange={handleChange} className="vvodFD" />
                    </div>

                    <div className="poleFD">
                        <label>Отчество</label>
                        <br /> <input type="text" name="patronymicDoc" value={doctor.patronymicDoc} onChange={handleChange} className="vvodFD" />
                    </div>

                    <div className="poleFD">
                        <label>Дата рождения</label>
                        <br /> <input type="date" name="birthdayDoc" value={doctor.birthdayDoc} onChange={handleChange} className="vvodFD" />
                    </div>

                    <div className="poleFD">
                        <label>Опыт работы</label>
                        <br /> <input type="number" name="experience" value={doctor.experience} onChange={handleChange} className="vvodFD" />
                    </div>

                    <div className="poleFD">
                        <label>Номер пользователя</label>
                        <br /> <input type="number" name="idUser" value={doctor.idUser} onChange={handleChange} className="vvodFD" />
                    </div>

                    <div className="poleFD">
                        <label>Номер специализации</label>
                        <br /> <input type="number" name="id_specification" value={doctor.id_specification} onChange={handleChange} className="vvodFD" />
                    </div>

                    <div className="poleFD">
                        <button type="submit" className="butnFD">подтвердить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormDoctors;
