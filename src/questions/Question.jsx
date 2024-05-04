import React, { useState } from 'react';
import Options from './Options';
import './question.css';

const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Madrid", "Paris", "Berlin"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Whale", "Giraffe", "Horse"],
            correctAnswer: "Whale"
        }
        // Add more questions here
    ];

    const handleNext = (selectedOption) => {
        // Do something with selected option
        console.log(`Selected option: ${selectedOption}`);

        // Move to the next question
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div className='all_body'>
            <div id="logo"><h3>SYNTAX LOGO</h3></div>
            <div className="quest_options">
            
                <div className="logo_questn">
                    
                    <div className="question">
                        <h2>{questions[currentQuestion].question}</h2>
                        <div className='currenQuest'><h4>{` Question ${currentQuestion + 1} of ${questions.length}`}</h4></div>
                    </div>
                </div>

                <div className="options">
                    <Options options={questions[currentQuestion].options} onNext={handleNext} />
                </div>
            </div>
        </div>
    );
};

export default Question;
