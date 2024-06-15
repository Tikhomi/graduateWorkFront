import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Delete.css';

function DeleteClient() {
    const [clients, setClients] = useState([]);
    const [selectedClientId, setSelectedClientId] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/client/all')
            .then(response => {
                const data = response.data;
                if (Array.isArray(data)) {
                    setClients(data);
                } else {
                    console.error('Полученные данные не являются массивом!', data);
                }
            })
            .catch(error => {
                console.error('Ошибка получения данных клиентов!', error);
            });
    }, []);

    const handleChange = (e) => {
        setSelectedClientId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/client/del/${selectedClientId}`)
            .then(response => {
                console.log(response.data);
                setClients(clients.filter(client => client.idClient !== parseInt(selectedClientId, 10)));
                setSelectedClientId('');
            })
            .catch(error => {
                console.error('Ошибка удаления данных!', error);
            });
    };

    return (
        <div>
            <div className="cardDelete">
                <h2 className="titleFS">Удаление пациента</h2>
                <form className="form-data" onSubmit={handleSubmit}>
                    <div className="poleFS">
                        <label>Выберите пациента для удаления</label>
                        <br />
                        <select name="idClient" value={selectedClientId} onChange={handleChange} className="vvodFS">
                            <option value="">--Выберите пациента--</option>
                            {clients.map(client => (
                                <option key={client.idClient} value={client.idClient}>
                                    {client.nameCl} {client.lastnameCl} ({client.idClient})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="poleFS">
                        <button type="submit" className="butnFS">Удалить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteClient;
