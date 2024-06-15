import React, { Component } from "react";
import "./Footer.css";
import {
    Navbar,
    Nav,
    Container,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Doctors from "../Pages/Doctors";
import BlogPageOne from "../Pages/BlogPageOne";
import BlogPageTwo from "../Pages/BlogPageTwo";
import BlogPageThree from "../Pages/BlogPageThree";
import BlogPageFour from "../Pages/BlogPageFour";
import Contacts from "../Pages/Contacts";

export default class Footer extends Component {
    render() {
        return (
            <>
                <div>
                    <h2 class="text7">CONVINSING</h2>
                    <p class="text8">о нас</p>
                    <p class="text9">блог</p>
                    <p class="text10">график работы</p>
                    <hr class="lineK"/>

                    <ul class="up">
                        <li class="li"><a href="/Doctors" class="footer">Наши врачи</a></li>
                        <li class="li1"><a href="/Contacts" class="footer">Контакты</a></li>
                    </ul>

                    <ul class="up">
                        <li class="li"><a href="/BlogPageOne" class="footer1">Как поддерживать чистоту зубов?</a></li>
                        <li class="li1"><a href="/BlogPageTwo" class="footer1">Что делать с зубами мудрости?</a></li>
                        <li class="li1"><a href="/BlogPageThree" class="footer1">Чем лучше выравнивать зубы?</a></li>
                        <li class="li1"><a href="/BlogPageFour" class="footer1">Вредят ли скайсы?</a></li>
                    </ul>

                    <ul class="up">
                        <li class="li"><a class="footer2">пн-чт с 9:00 до 22:00</a></li>
                        <li class="li1"><a class="footer2">пт-сб с 9:00 до 21:00</a></li>
                        <li class="li1"><a class="footer2">вс выходной</a></li>
                    </ul>

                    <p class="text11">© Стоматология CONVINSING 2023. Все права защищены.</p>
                </div>
            </>
        )
    }
}