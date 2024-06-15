import React, { useState } from 'react';
import axios from 'axios';
import './css/FormS.css';

function FormService() {
    const [service, setService] = useState({
        idService: '',
        nm_service: '',
        costServ: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({
            ...service,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            idService: service.idService,
            nmService: service.nmService,
            costServ: service.costServ
        };

        axios.post('http://localhost:8080/service/add', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Ошибка добавления данных!', error);
            });
    };

    return (
        <div>
            <div className="cardFS">
                <h2 className="titleFS">Форма услуг</h2>
                <form className="form-data" onSubmit={handleSubmit}>
                    <div className="poleFS">
                        <label>Идентификатор услуги</label>
                        <br /> <input type="number" name="idService" value={service.idService} onChange={handleChange} className="vvodFS" />
                    </div>

                    <div className="poleFS">
                        <label>Название услуги</label>
                        <br /> <input type="text" name="nm_service" value={service.nm_service} onChange={handleChange} className="vvodFS" />
                    </div>

                    <div className="poleFS">
                        <label>Стоимость услуги</label>
                        <br /> <input type="number" name="costServ" value={service.costServ} onChange={handleChange} className="vvodFS" />
                    </div>

                    <div className="poleFS">
                        <button type="submit" className="butnFS">подтвердить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormService;
