import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./css/CabAdmin.css";

function CabAdmin() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("id");

    useEffect(() => {
        if (!userId) {
            console.error('userId is null. Redirecting to login page.');
            window.location.href = '/login';
            return;
        }
    });

        return (
            <div className="cardCabA">
                <h2 className="titleCabA">Страница администратора</h2>
                <form action="/FormTest">
                    <button type="submit" className="butnCabA">изменения баз данных</button>
                </form>
            </div>
        );
};

export default CabAdmin;