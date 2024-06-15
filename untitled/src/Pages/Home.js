import React, { Component } from 'react'
import './css/Home.css';
import png1 from "../Components/img/1.png";
import png2 from "../Components/img/2.png";
import jpg3 from "../Components/img/3.jpg";
import { HashLink } from 'react-router-hash-link';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div class="first">
                    <img src={png1} class="pic1" />
                    <p class="text1">Клиника "CONVINSING" радует своих пациентов прекрасными улыбками и безболезненными процедурами с 2008 года. Наши филиалы расположены в таких крупных городах, как Москва, Санкт-Петербург, Сочи, Екатеринбург и Калининград. У нас работают специалисты, обучавшиеся в лучших универститетах мира. В нашей клинике множество направлений, с которыми работают опытные врачи.</p>
                    <form action="/ForClientF" target="_blank">
                        <button class="btn1">записаться на приём</button>
                    </form>
                </div>

                <h2 class="titleServ">Наши основные услуги</h2>

                <div class="second">

                    <div class="cardK">
                        <HashLink smooth to='/Services/#one' class="card-linkK">
                            <h3 class="card-titleK">профилактика</h3>
                            <p>Профессиональная чистка, удаление зубного камня, а также чистка AirFlow.</p>
                        </HashLink>
                    </div>
                    <div class="cardK">
                        <HashLink smooth to='/Services/#two' class="card-linkK">
                            <h3 class="card-titleK">лечение зубов</h3>
                            <p>Консультация, пломбирование, лечение кариеса, пульпита, корневых каналов.</p>
                        </HashLink>
                    </div>
                    <div class="cardK">
                        <HashLink smooth to='/Services/#three' class="card-linkK">
                            <h3 class="card-titleK">эстетическая стоматология</h3>
                            <p>Отбеливание зубов, установка виниров, реставрация зубов, моделирование улыбки.</p>
                        </HashLink>
                    </div>

                    <div class="cardK">
                        <HashLink smooth to='/Services/#four' class="card-linkK">
                            <h3 class="card-titleK">детская стоматология</h3>
                            <p>Детская ортодонтия,  терапевтическая и хирургическая стоматология.</p>
                        </HashLink>
                    </div>
                    <div class="cardK">
                        <HashLink smooth to='/Services/#five' class="card-linkK">
                            <h3 class="card-titleK">хирургия</h3>
                            <p>Консультация, удаление зубов мудрости, удаление зубов, лечение воспалений.</p>
                        </HashLink>
                    </div>
                    <div class="cardK">
                        <HashLink smooth to='/Services/#six' class="card-linkK">
                            <h3 class="card-titleK">исправление прикуса</h3>
                            <p>Консультация ортодонта, брекеты, трейнеры, ортодонтические микроимпланты.</p>
                        </HashLink>
                    </div>
                </div>

                <div>
                    <img src={png2} class="pic2"></img>
                    <p class="text3">Опишите ваши симптомы, а мы подберём лечение</p>
                    <p class="text4">Попробуйте функцию нашего сайта: опишите ваши симптомы, а мы попробуем как можно точнее определить ваш диагноз и предоставить рекомендации. Но помните, точный диагноз вам поставить может только врач.</p>

                    <form action="/Test" target="_blank">
                        <button class="btn2">попробовать</button>
                    </form>
                </div>

                <img src={jpg3} class="pic3"></img>
                <p class="text5">“ CONVINSING ” - сеть взрослых и детских стоматологических отделений</p>
                <p class="text6">Наша клиника уже продолжительное время пользуется популярностью. Наши клиенты всегда остаются довольными и счастливыми. Детям в нашей клинике обеспечиваются идеальные условия, чтобы отвлечь малышей от лечения. Мы всегда на стороне наших клиентов и стараемся обеспечивать лучшие условия. Если же, по какой-то причине, вы остались недовольны процедурой или лечением, то мы вернём деньги.</p>
            </div>
        );
    }
}
