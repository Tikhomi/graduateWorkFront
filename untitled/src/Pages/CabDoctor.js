import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./css/CabDoctor.css";

function CabDoctor() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("id");

    const [doctorInfo, setDoctorInfo] = useState({ doctor: null, appointment: null });

    useEffect(() => {
        if (!userId) {
            console.error('userId is null. Redirecting to login page.');
            window.location.href = '/login';
            return;
        }

        const fetchDoctorData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/doctor/getByUserId/${userId}`);
                setDoctorInfo(prevState => ({ ...prevState, doctor: response.data }));
            } catch (error) {
                console.error('Ошибка при получении контактных данных:', error);
            }
        };

        const fetchAppointmentData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/appointment/lastForDoc/${userId}`);
                setDoctorInfo(prevState => ({ ...prevState, appointment: response.data }));
            } catch (error) {
                console.error('Ошибка при получении настроек:', error);
            }
        };

        fetchDoctorData();
        fetchAppointmentData();
    }, [userId]);

    if (!doctorInfo.doctor || !doctorInfo.appointment) {
        return <div>Загрузка данных пользователя...</div>;
    }

    return (
        <div className="cardCabD">
            <h2 className="titleCabD">Личный кабинет</h2>
            <p className="textCabD">Имя: {doctorInfo.doctor.nameDoc}</p>
            <p className="textCabD">Фамилия: {doctorInfo.doctor.lastnameDoc}</p>
            <p className="textCabD">Отчество: {doctorInfo.doctor.patronymicDoc}</p>
            <p className="textCabD">Дата рождения: {new Date(doctorInfo.doctor.birthdayCl).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })}</p>
            <p className="textCabD">Опыт работы: {doctorInfo.doctor.experience}</p>
            <p className="textCabD">Данные о следующем приёме {doctorInfo.appointment && doctorInfo.appointment.last ? doctorInfo.appointment.last.userId : ' '}</p>
            <p className="textCabD">Дата записи:   {`${new Date(doctorInfo.appointment.dtAp).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })} 
  ${new Date(doctorInfo.appointment.dtAp).toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })}`}
            </p>
            <p className="textCabD">Доктор: {doctorInfo.appointment.clientName}</p>
            <p className="textCabD">Услуга: {doctorInfo.appointment.serviceName}</p>
            <p className="textCabD">Статус: {doctorInfo.appointment.statusName}</p>
        </div>
    );
}

export default CabDoctor;