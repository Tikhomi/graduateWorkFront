import './css/Contacts.css';
import {Component} from "react";

export default class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
              <h2 className="titleA">Наши филиалы:</h2>
              <div class="vidz_adr">
                <div class="card_adr">
                  <a class="card-link_adr">
                    <h3 class="card-title_adr"><b>Москва</b></h3>
                    <p>Телефон: +7 (909) 151-22-01</p>
                    <p>Email: convinsingMSK@gmail.com</p>
                    <p>Адрес: 2-я Звенигородская улица, 13с41, Москва</p>
                    <p><b>График работы:</b></p>
                    <p>пн-чт с 9:00 до 22:00</p>
                    <p>пт-сб с 9:00 до 21:00</p>
                    <p>вс выходной</p></a>
                </div>
              </div>

          <div class="vidz_adr">
              <div class="card_adr">
                  <a class="card-link_adr">
                      <h3 class="card-title_adr"><b>Сочи</b></h3>
                      <p>Телефон: +7 (909) 151-22-04</p>
                      <p>Email: convinsingAER@gmail.com</p>
                      <p>Адрес: Строительный переулок, 4А, Сочи</p>
                      <p><b>График работы:</b></p>
                      <p>пн-чт с 9:00 до 22:00</p>
                      <p>пт-сб с 9:00 до 21:00</p>
                      <p>вс выходной</p></a>
              </div>
          </div>

          <div class="vidz_adr">
              <div class="card_adr">
                  <a class="card-link_adr">
                      <h3 class="card-title_adr"><b>Санкт-Петербург</b></h3>
                      <p>Телефон: +7 (909) 151-22-02</p>
                      <p>Email: convinsingSPT@gmail.com</p>
                      <p>Адрес: улица Жукова, 26К, Санкт-Петербург</p>
                      <p><b>График работы:</b></p>
                      <p>пн-чт с 9:00 до 22:00</p>
                      <p>пт-сб с 9:00 до 21:00</p>
                      <p>вс выходной</p></a>
              </div>
          </div>

          <div class="vidz_adr">
              <div class="card_adr">
                  <a class="card-link_adr">
                      <h3 class="card-title_adr"><b>Калининград</b></h3>
                      <p>Телефон: +7 (909) 151-22-03</p>
                      <p>Email: convinsingKGD@gmail.com</p>
                      <p>Адрес: улица Степана Разина, 34, Калининград</p>
                      <p><b>График работы:</b></p>
                      <p>пн-чт с 9:00 до 22:00</p>
                      <p>пт-сб с 9:00 до 21:00</p>
                      <p>вс выходной</p></a>
              </div>
          </div>

              <h1 className="titleA2">Связаться с нами можно:</h1>

              <div class="vidz">
                  <div class="cardA" id="one">
                      <a class="card-linkA">
                          <h3 class="card-titleA">Почта для связи с нами: convinsing@gmail.ru</h3>
                          <p> Номер службы поддержки: +7 (902) 302-17-80</p>
                          <p>Поддержка работает с 10 утра до 8 вечера ежедневно</p>
                          <p>Также вы можете написать нам в социальных сетях ниже:</p>
                      </a>
                      <div  class="BTNForm">
                          <form action="https://vk.com/haat_jy" target="_blank">
                              <button class="btn6">вконтакте</button>
                          </form>
                          <form action="https://t.me/mooolalina" target="_blank">
                              <button class="btn6">телеграмм</button>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
};