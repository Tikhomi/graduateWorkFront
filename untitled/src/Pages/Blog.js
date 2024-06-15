import './css/Blog.css';
import {Component} from "react";

import png4 from "../Components/img/4.png";
import png5 from "../Components/img/5.png";
import png6 from "../Components/img/6.png";
import png7 from "../Components/img/7.png";

export default class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <h1 className="titleB">Блог</h1>

                <div class="vidz">
                    <div class="card1B" id="one">
                        <img src={png4} className="pic4"></img>
                        <a class="card-linkB">
                        <h3 class="card-titleB">Как поддерживать чистоту зубов?</h3>
                            <p> Как правильно чистить зубы подробная инструкция, различные техники правильной чистки
                                зубов Подбор щетки, пасты, рекомендации специалистов.</p>
                        </a>
                        <form action="/BlogPageOne" target="_blank">
                            <button class="btn5">читать</button>
                        </form>
                    </div>

                    <div class="card2B" id="one">
                        <img src={png5} className="pic5"></img>
                        <a class="card-linkB">
                        <h3 class="card-titleB">Что делать с зубами мудрости?</h3>
                            <p> Что нужно делать, если болит зуб мудрости: лечить или удалять? Причины боли в зубе,
                                методы диагностики. В каких случаях зуб мудрости лечат, а в каких удаляют?</p>
                        </a>
                        <form action="/BlogPageTwo" target="_blank">
                            <button class="btn5">читать</button>
                        </form>
                    </div>

                    <div class="card3B" id="one">
                        <img src={png6} className="pic6"></img>
                        <a class="card-linkB">
                        <h3 class="card-titleB">Чем лучше выравнивать зубы?</h3>
                            <p> Брекеты, элайнеры, виниры, скобы и капы. Как выбрать? Наши врачи проведут диагностику и
                                подберут съемную или несъемную конструкцию, изготовленную из прочных и безопасных
                                материалов.</p>
                        </a>
                        <form action="/BlogPageThree" target="_blank">
                            <button class="btn5">читать</button>
                        </form>
                    </div>


                    <div class="card4B" id="one">
                        <img src={png7} className="pic7"></img>
                        <a class="card-linkB">
                            <h3 class="card-titleB">Вредят ли скайсы?</h3>
                            <p> Скайс — это украшения в виде страз, которые крепятся прямо на поверхность зуба, являются
                                съемными и не требуют хирургического вмешательства для установки.</p>
                        </a>
                        <form action="/BlogPageFour" target="_blank">
                            <button class="btn5">читать</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};
