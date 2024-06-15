import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Delete.css';

function DeleteService() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/service/all')
            .then(response => {
                if (Array.isArray(response.data)) {
                    console.log('Services loaded successfully:', response.data);
                    setServices(response.data);
                } else {
                    console.error('API response is not an array:', response.data);
                    setServices([]);
                }
            })
            .catch(error => {
                console.error('Error loading services:', error);
                setServices([]);
            });
    }, []);

    const handleDelete = (e) => {
        e.preventDefault();
        const serviceId = parseInt(selectedService, 10);
        if (isNaN(serviceId)) {
            console.error('Invalid service ID');
            return;
        }
        console.log('Deleting service:', serviceId);
        axios.delete(`http://localhost:8080/service/del/${serviceId}`)
            .then((response) => {
                console.log('Service deleted successfully:', response);
                setServices(services.filter(service => service.idService !== serviceId));
                setSelectedService('');
            })
            .catch((error) => {
                console.error('Error deleting service:', error);
            });
    };

    return (
        <div>
            <div className="cardDelete">
                <h2 className="titleFS">Удаление услуги</h2>
                <form className="form-data" onSubmit={handleDelete}>
                    <div className="poleFS">
                        <label>Выберите услугу для удаления</label>
                        <br />
                        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="vvodFS">
                            <option value="">--Выберите услугу--</option>
                            {services.map((service) => (
                                <option key={service.idService} value={service.idService}>
                                    {service.nmService}
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

export default DeleteService;
