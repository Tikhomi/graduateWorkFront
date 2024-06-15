import React, { Component, useState } from 'react';
import './css/Test.css';

export default function Test() {
    const questions = [
        {
            questionText: 'Локализация больного зуба:',
            answerOptions: [
                { answerText: 'Передний отдел верхней челюсти.', isCorrect: true },
                { answerText: 'Передний отдел нижней челюсти.', isCorrect: true },
                { answerText: 'Боковой отдел верхней челюсти.', isCorrect: true },
                { answerText: 'Боковой отдел нижней челюсти.', isCorrect: true },
            ],
        },
        {
            questionText: 'Возраст:',
            answerOptions: [
                { answerText: 'до 1 года', isCorrect: true },
                { answerText: 'от 1 года до 10 лет', isCorrect: true },
                { answerText: 'от 10 до 20 лет', isCorrect: true },
                { answerText: 'старше 20 лет', isCorrect: true },
                { answerText: 'старше 50 лет', isCorrect: true },
            ],
        },
        {
            questionText: 'Температура тела:',
            answerOptions: [
                { answerText: 'Нормальная до 37 С', isCorrect: true },
                { answerText: '37.5-38.0 С', isCorrect: true },
                { answerText: '38 и выше', isCorrect: true },
            ],
        },
        {
            questionText: 'Состояние десны вокруг зуба:',
            answerOptions: [
                { answerText: 'Не изменена', isCorrect: true },
                { answerText: 'Красная и отёчная', isCorrect: true },
                { answerText: 'Красная, отёчная с периодически появляющимся «гнойничком»', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='cardTest'>
            {showScore ? (
                <div className='resultTest'>
                    <p className='titleTest'>Ваш диагноз:</p>
                    <p className='resultTest'>Пульпит - это осложнение кариеса. В инфецированных зубах патологические процессы идут очень быстро, поэтому вовремя не вылеченный кариес может дать осложнение - Пульпит, когда инфекция в зубе доходит до нерва и поражает его. Для постановки более точного диагноза необходимо провести осмотр стоматолога. Записаться на приём Вы можете по телефону или онлайн.</p>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='titleTest'>
                            <span>Вопрос {currentQuestion + 1}</span>
                        </div>
                        <div className='textTest'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='cardT-answer'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button className='cardT-butn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}