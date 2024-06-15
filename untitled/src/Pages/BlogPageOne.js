import './css/BlogPage.css';
import {Component} from "react";

export default class BlogPageOne extends Component {
    render() {
        return (
            <div className="cardBP">
                <div className="card-inBP">
                    <h3 className="card-titleBP">Как поддерживать чистоту зубов?</h3>
                    <p>Регулярно чистить зубы необходимо для профилактики целого ряда серьезных заболеваний,
                        затрагивающих как непосредственно ротовую полость, так и ЖКТ человека в целом. Любые проблемы,
                        возникшие в ротовой полости, прогрессируя, неминуемо приводят к нарушению пережевывания. При
                        чистки зубов учитывается всё: какую щетку и пасту мы выбираем, и какую выбираем технику чистки.
                        Только при совокупности этих факторов возможно достичь чистоты зубов и здоровья всей полости
                        рта.</p>
                    <p>В процессе чистки зубов движения, выполняемые щеткой, должны быть вертикальными - как будто
                        происходит выметание бактерий - от начала десны до верхней части зуба. Не стоит чистить зубы
                        горизонтальными движениями - из-за этого в межзубных промежутках скапливается еще больше
                        остатков пищи и налета.</p>
                    <p>При носке брекетов процесс чистки зубов будет слегка отличаться. В качестве дополнительного
                        инструмента понадобится специальная счёточка для чистки брекет-системы. С помощью неё необходимо
                        по горизонтальному направлению почистить пространство под дугой, а также области соединения
                        зубов и брекетов, а потом специальной зубной нитью надо почистить зубные стыки и области вокруг
                        брекетов. В процессе ношения брекетов остатки пищи, микроорганизмы и бактерии скапливаются во
                        множестве труднодоступных участков: под дугой, вокруг брекетов, в местах стыка и т.д. Если не
                        проводить правильно их чистку, то в этих местах интенсивно будет образовываться налет, который
                        впоследствии перейдет в зубной камень, что повлечет за собой образование кариеса и
                        воспалительные процессы в деснах.</p>
                    <p>Чистить зубы необходимо 2 раза в день - утром и вечером. По принятым стандартам, процедура должна
                        занимать около 2 минут, однако стоматологи рекомендуют чистить зубы около 3 минут. Также в
                        идеале рекомендуется использовать жевательную резинку около 4-5 минут после каждого приема пищи
                        для очищения полости рта.</p>
                    <p>Не реже раза в год необходимо проходить процедуру комплексной гигиены полости рта, в которую
                        включена профессиональная чистка, позволяющая провести удаление налета и зубного камня.</p>
                    <p>Очищение языка - достаточно важный аспект, ведь он содержит огромное число бактерий, а они в свою
                        очередь могут быть причиной неприятного запаха изо рта, а также ряда болезней ротовой полости.
                        Более того, регулярная чистка языка позволяет повысить чувствительность вкусовых рецепторов.
                        Чистка языка проводится обратной стороной зубной щетки, специальными скребками или
                        ирригатором.</p>
                </div>
            </div>
        )
    }
};
