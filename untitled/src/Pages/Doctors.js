import './css/Doctors.css';

import doc1 from "../Components/img/doc1.jpg";
import doc2 from "../Components/img/doc2.jpg";
import doc3 from "../Components/img/doc3.jpg";
import doc4 from "../Components/img/doc4.jpg";
import doc5 from "../Components/img/doc5.jpg";
import doc6 from "../Components/img/doc6.jpg";
import doc7 from "../Components/img/doc7.jpg";
import doc8 from "../Components/img/doc8.jpg";

function Doctors() {
  return (
    <div className="Doctors">

      <h1 className="titleD">Наши врачи</h1>

      <div class="vidz">
          <div class="cardD" id="one">
              <img src={doc1} className="pic" alt="doc"></img>
          <a class="card-linkD">
                  <h3 class="card-titleD">Аксенова <br></br> Ирина Анатольевна</h3>
                  <p> Ортодонт <br></br>
                  ведущий специалист <br></br>
                  Стаж: 23 года</p>
              </a>
              <form action="/ForClientF" target="_blank">
                  <button class="btn4">записаться</button>
              </form>
          </div>

          <div class="cardD" id="one">
              <img src={doc2} className="pic" alt="doc"></img>
              <a class="card-linkD">
              <h3 class="card-titleD">Архипова <br></br> Мария Петровна</h3>
                  <p> Хирург, имплантолог <br></br>
                      ведущий специалист <br></br>
                      Стаж: 8 лет</p>
              </a>
              <form action="/ForClientF" target="_blank">
                  <button class="btn4">записаться</button>
              </form>
          </div>

          <div class="cardD" id="one">
              <img src={doc3} className="pic" alt="doc"></img>
              <a class="card-linkD">
              <h3 class="card-titleD">Семёнова <br></br> Анна Викторовна</h3>
                  <p> Стоматолог детский <br></br>
                  Стаж: 12 лет</p>
              </a>
              <form action="/ForClientF" target="_blank">
                  <button class="btn4">записаться</button>
              </form>
          </div>

          <div class="cardD" id="one">
              <img src={doc4} className="pic" alt="doc"></img>
              <a class="card-linkD">
              <h3 class="card-titleD">Манкин <br></br> Алексей Ильич</h3>
                  <p> Терапевт <br></br>
                  пародонтолог <br></br>
                  Стаж: 18 лет</p>
              </a>
              <form action="/ForClientF" target="_blank">
                  <button class="btn4">записаться</button>
              </form>
          </div>

          <div class="cardD" id="one">
              <img src={doc5} className="pic" alt="doc"></img>
              <a class="card-linkD">
              <h3 class="card-titleD">Верещук <br></br> Денис Павлович</h3>
                  <p> Ортопед <br></br>
                  Стаж: 10 лет</p>
              </a>
              <form action="/ForClientF" target="_blank">
                  <button class="btn4">записаться</button>
              </form>
          </div>

          <div class="cardD" id="one">
              <img src={doc6} className="pic" alt="doc"></img>
              <a class="card-linkD">
              <h3 class="card-titleD">Галушко <br></br> Андрей Сергеевич</h3>
                  <p> Хирург, имплантолог <br></br>
                  Стаж: 14 лет</p>
              </a>
              <form action="/ForClientF" target="_blank">
                  <button class="btn4">записаться</button>
              </form>
          </div>

          <div class="cardD" id="one">
              <img src={doc7} className="pic" alt="doc"></img>
              <a class="card-linkD">
              <h3 class="card-titleD">Павлович <br></br> Арина Антоновна</h3>
                  <p> Ортодонт детский<br></br>
                  Стаж: 8 лет</p>
              </a>
              <form action="/ForClientF" target="_blank">
                  <button class="btn4">записаться</button>
              </form>
          </div>

          <div class="cardD" id="one">
              <img src={doc8} className="pic" alt="doc"></img>
              <a class="card-linkD">
              <h3 class="card-titleD">Пчёлкина <br></br> Алиса Романовна</h3>
                  <p> Детский хирург <br></br>
                  Стаж: 9 лет</p>
              </a>
              <form action="/ForClientF" target="_blank">
                  <button class="btn4">записаться</button>
              </form>
          </div>

      </div>

    </div>
  );
}

export default Doctors;
