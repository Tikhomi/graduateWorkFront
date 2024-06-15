import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/FormFC.css';

function ForClientF() {
    const [dtAp, setDtAp] = useState('');
    const [selectedServiceId, setSelectedServiceId] = useState('');
    const [selectedDoctorId, setSelectedDoctorId] = useState('');
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/service/all')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error loading services:', error);
            });

        axios.get('http://localhost:8080/doctor/all')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('Error loading doctors:', error);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                dtAp,
                service: selectedServiceId,
                userDoc: selectedDoctorId
            };

            const response = await axios.post('http://localhost:8080/appointment/add', data);
            console.log('Запись успешно создана!', response.data);
        } catch (error) {
            console.error('Ошибка при записи', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="cardFC">
            <h2 className="titleFC">Запись на приём</h2>
            <label><p className="textFC">Дата записи:</p>
                <input type="datetime-local" className="vvodFC" value={dtAp} onChange={e => setDtAp(e.target.value)} required/>
            </label>
            <label><p className="textFC">Выбор услуги:</p>
                <select value={selectedServiceId} className="vvodFC" onChange={e => setSelectedServiceId(e.target.value)} required>
                    <option value="">--Выберите услугу--</option>
                    {services.map(service => (
                        <option key={service.idService} value={service.idService}>
                            {service.nmService}
                        </option>
                    ))}
                </select>
            </label>

            <label><p className="textFC">Выбор врача:</p>
                <select value={selectedDoctorId} className="vvodFC" onChange={e => setSelectedDoctorId(e.target.value)} required>
                    <option value="">--Выберите врача--</option>
                    {doctors.map(doctor => (
                        <option key={doctor.idDoctor} value={doctor.idDoctor}>
                            {doctor.nameDoc}
                        </option>
                    ))}
                </select>
            </label>

            <button type="submit" className="butnFC">Записаться</button>
        </form>
    );
}

export default ForClientF;
