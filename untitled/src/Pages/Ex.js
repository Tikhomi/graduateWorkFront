import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AtList = () => {
    const [doctor, setDoctor] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await axios.get('http://localhost:8080/doctor/all');
                setDoctor(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchDoctor();
    }, []);

    const handleChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    return (
        <div>
            <label htmlFor="dropdown">Выберите врача:</label>
            <select id="dropdown" value={selectedDoctor} onChange={handleChange}>
                <option value="">--Выберите опцию--</option>
                {doctor.map((option) => (
                    <option key={doctor.nameDoc} value={doctor.nameDoc}>
                        {doctor.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AtList;
