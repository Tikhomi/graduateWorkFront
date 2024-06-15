import React, { useState } from 'react';
import axios from 'axios';
import './css/SMS.css';

function CodeVerificationForm() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/verify-code', { code });
            if (response.data.isValid) {
                window.location.href = '/CabClient';
            } else {
                setError('Неверный код, попробуйте снова');
            }
        } catch (error) {
            setError('Ошибка при сверке кода');
            console.error('Verification error:', error.response?.data || error.message);
        }
    };

    return (
        <div className="cardSMS">
            <h2 className="titleSMS">Проверка номера</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p className="textSMS">Введите код:</p>
                    <input type="text" className="vvodSMS" placeholder='Введите код' value={code} onChange={(e) => setCode(e.target.value)} required/>
                </label>
                <button type="submit" className="butnSMS">Проверить код</button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
    );
};

export default CodeVerificationForm;