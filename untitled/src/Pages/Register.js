import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import './css/Register.css';
import { Checkbox } from "../Components/Checkbox";
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        password: ''
    });
    const errorMessageRef = useRef(null);
    const agreeTermsRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("id");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedPhoneNumber = formData.phoneNumber.replace(/\D/g, '');

        if (agreeTermsRef.current && !agreeTermsRef.current.checked) {
            errorMessageRef.current.innerText = 'Необходимо дать согласие на обработку персональных данных';
            agreeTermsRef.current.focus();
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/register', {
                phoneNumber: formattedPhoneNumber,
                password: formData.password
            });
            await axios.post('http://localhost:8080/api/send-sms', { phoneNumber: formattedPhoneNumber });
            navigate(`/CabClient?id=${userId}`);
        } catch (error) {
            errorMessageRef.current.innerText = 'Ошибка регистрации. Пожалуйста, попробуйте снова.';
            console.error('Registration error:', error.response?.data || error.message);
        }
    };

    useEffect(() => {
        if (!userId) {
            console.error('userId is null. Redirecting to login page.');
            navigate('/login');
            return;
        }
    }, [userId]);

    return (
        <div className="Register">
            <form className="formR" onSubmit={handleSubmit}>
                <h1 className="titleR">Регистрация</h1>
                <p className="textR">Введите номер телефона:</p>
                <InputMask
                    mask="+7(999)999-99-99"
                    maskChar=""
                    type="tel"
                    className="vvodR"
                    name="phoneNumber"
                    placeholder="Введите номер телефона"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    required
                />

                <p className="textR">Введите пароль:</p>
                <input
                    className="vvodR"
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                    onChange={handleChange}
                    value={formData.password}
                    required
                />

                <Checkbox
                    id="agreeTerms"
                    name="agreeTerms"
                    ref={agreeTermsRef}
                />
                <label className="termR" htmlFor="agreeTerms">Я даю согласие на <a className="aR" href='/Term'>обработку персональных данных</a></label>

                <div ref={errorMessageRef} style={{ color: 'red' }}></div>

                <button type='submit' className="butnR">Зарегистрироваться</button>

                <br/>
                <a className="aR" href="/Login">Уже есть аккаунт?</a>
            </form>
        </div>
    );
};

export default Register;
