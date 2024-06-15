import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./css/CabClient.css";

function CabClient() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("id");

    const [clientInfo, setClientInfo] = useState({ client: null, appointment: null });

    useEffect(() => {
        if (!userId) {
            console.error('userId is null. Redirecting to login page.');
            window.location.href = '/login';
            return;
        }

        const fetchClientData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/client/getByUserId/${userId}`);
                setClientInfo(prevState => ({ ...prevState, client: response.data }));
            } catch (error) {
                console.error('Ошибка при получении контактных данных:', error);
            }
        };

        const fetchAppointmentData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/appointment/last/${userId}`);
                setClientInfo(prevState => ({ ...prevState, appointment: response.data }));
            } catch (error) {
                console.error('Ошибка при получении настроек:', error);
            }
        };

        fetchClientData();
        fetchAppointmentData();
    }, [userId]);

    if (!clientInfo.client || !clientInfo.appointment) {
        return <div>Загрузка данных пользователя...</div>;
    }

    return (
        <div className="cardCabC">
            <h2 className="titleCabC">Личный кабинет</h2>
            <p className="textCabC">Имя: {clientInfo.client.nameCl}</p>
            <p className="textCabC">Фамилия: {clientInfo.client.lastnameCl}</p>
            <p className="textCabC">Отчество: {clientInfo.client.patronymicCl}</p>
            <p className="textCabC">Дата рождения: {new Date(clientInfo.client.birthdayCl).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })}</p>
            <p className="textCabC">Данные о следующем приёме {clientInfo.appointment && clientInfo.appointment.last ? clientInfo.appointment.last.userId : ' '}</p>
            <p className="textCabC">Дата записи:{new Date (clientInfo.appointment.dtAp).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })}</p>
            <p className="textCabC">Доктор: {clientInfo.appointment.doctorName}</p>
            <p className="textCabC">Услуга: {clientInfo.appointment.serviceName}</p>
            <p className="textCabC">Статус: {clientInfo.appointment.statusName}</p>
            <form action="/RedactorF">
                <button type="submit" className="butnCabC">Редактировать профиль</button>
            </form>
        </div>
    );
}

export default CabClient;