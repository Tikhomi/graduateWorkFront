import React, { useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value.replace(/\D/g, ''));
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^[0-9]{11}$/;
        return regex.test(phoneNumber);
    };

    const getRolePath = (role) => {
        switch (role) {
            case 'ROLE_ADMIN':
                return '/CabAdmin';
            case 'ROLE_DOCTOR':
                return '/CabDoctor';
            case 'ROLE_CLIENT':
                return '/CabClient';
            default:
                return '/';
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!validatePhoneNumber(phoneNumber)) {
            setError('Неправильно введён номер');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                phoneNumber,
                password,
            });

            if (response.status === 200) {
                const data = response.data;
                const userId = data.idUser;
                localStorage.setItem('userId', userId);

                const userResponse = await axios.get(`http://localhost:8080/user/get/${userId}`);
                const userData = userResponse.data;
                const rolePath = getRolePath(userData.role);
                localStorage.setItem('role', userData.role);
                navigate(`${rolePath}?id=${userId}`);

            } else {
                setError('Ошибка входа');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Ошибка сети');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="Login">
            <form className="formL" onSubmit={handleSubmit}>
                <h1 className="titleL">Вход</h1>
                <label>
                    <p className="textL">Введите номер телефона:</p>
                    <InputMask
                        mask="+7(999)999-99-99"
                        maskChar=""
                        type="tel"
                        className="vvodL"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        name="phoneNumber"
                        placeholder="Введите номер телефона"
                        required
                    />
                </label>

                <label>
                    <p className="textL">Введите пароль:</p>
                    <input
                        type="password"
                        className="vvodL"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Введите пароль"
                        required
                    />
                </label>

                {error && <div style={{ color: 'red' }}>{error}</div>}

                {role && <p>Роль пользователя: <b>{role}</b></p>}

                <button type="submit" className="butnL">Войти</button>

                <br/><a className="aL" href="/Register">Ещё нет аккаунта?</a>
            </form>
        </div>
    );
}

export default LoginPage;