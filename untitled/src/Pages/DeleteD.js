import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Delete.css';

function DeleteDoctor() {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/doctor/all")
            .then(response => {
                console.log('Doctors loaded successfully:', response.data);
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('Error loading doctors:', error);
            });
    }, []);

    const handleDelete = (e) => {
        e.preventDefault();
        const doctorId = parseInt(selectedDoctor, 10);
        console.log('Deleting doctor:', doctorId);
        axios.delete(`http://localhost:8080/doctor/del/${doctorId}`)
            .then((response) => {
                console.log('Doctor deleted successfully:', response);
                setDoctors(doctors.filter(doctor => doctor.idDoctor !== doctorId));
            })
            .catch((error) => {
                console.error('Error deleting doctor:', error);
            });
    };

    return (
        <div>
            <div className="cardDelete">
                <h2 className="titleFD">Удаление врача</h2>
                <form className="form-data" onSubmit={handleDelete}>
                    <div className="poleFD">
                        <label>Выберите врача для удаления</label>
                        <br />
                        <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} className="vvodFD">
                            <option value="">--Выберите врача--</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.idDoctor} value={doctor.idDoctor}>
                                    {doctor.nameDoc} {doctor.lastnameDoc}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="poleFD">
                        <button type="submit" className="butnFD">Удалить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteDoctor;
