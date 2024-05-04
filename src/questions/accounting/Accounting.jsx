import React, { useState, useEffect } from 'react';
import './acct.css'; // Import CSS file for styling

const Accounting = () => {
    const [loading, setLoading] = useState(true); // State to track loading state
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(10); // Timer starts at 10 seconds
    const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option
    const [isCorrect, setIsCorrect] = useState(null); // State to track if the selected answer is correct
    const [score, setScore] = useState(0); // State to store the score
    const [wrongAnswers, setWrongAnswers] = useState(0); // State to store the number of wrong answers

    useEffect(() => {
        fetch('https://questionsapi-1.onrender.com/api/quiz')
            .then(response => response.json())
            .then(data => {
                // Filter questions to get only those from the "Accounting" category
                const accountingQuestions = data.find(category => category.category === "Accounting");
                // Modify correctAnswer to store the index of the correct answer as a number
                const modifiedQuestions = accountingQuestions.questions.map(question => ({
                    ...question,
                    correctAnswer: question.options.findIndex((option, index) => index === question.correctAnswer)
                }));
                setQuestions(modifiedQuestions);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                // Move to the next question if timer reaches 0
                handleNextQuestion();
            }
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [timer, questions]);

    const handleAnswerClick = (index) => {
        setSelectedOption(index);
    };

    const handleNextQuestion = () => {
        // Check if an answer is selected or timer reached 0
        if (selectedOption !== null || timer === 0) {
            // Move to the next question if not the last question
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null); // Reset selected option
                setTimer(10); // Reset timer for the next question
            } else {
                // If it's the last question, calculate and set the score
                calculateScore();
                setCurrentQuestionIndex(questions.length); // Set index to show result
            }
            // Reset isCorrect state for the next question
            setIsCorrect(null);
        }
    };

    const calculateScore = () => {
        let correctAnswers = 0;
        let wrongAnswers = 0;

        questions.forEach((question, index) => {
            if (selectedOption !== null) {
                if (selectedOption === question.correctAnswer) {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            }
        });

        setScore(correctAnswers);
        setWrongAnswers(wrongAnswers);
    };

    // Show loading message if data is yet to be fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="all_body">
            <div className="instructions">
                <p>You have {timer} seconds to answer each question.</p>
            </div>
            <div id="logo"><h3>SYNTAX LOGO</h3></div>
            <div className="quest_options">
                <div className="logo_questn">
                    <div className="question">
                        <h2>{questions[currentQuestionIndex]?.question}</h2>
                        <div className='currenQuest'><h4>{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</h4></div>
                    </div>
                </div>
                <div className="options">
                    <div className="option-container">
                        <div className="optionContainer">
                            {questions[currentQuestionIndex]?.options.map((option, index) => (
                                <div className="option-item" key={index}>
                                    <input
                                        className="option-radio"
                                        type="radio"
                                        id={`option${index}`}
                                        name="option"
                                        value={index}
                                        checked={selectedOption === index}
                                        onChange={() => handleAnswerClick(index)}
                                        disabled={selectedOption !== null}
                                    />
                                    <label className="option-label" htmlFor={`option${index}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="next-button" onClick={handleNextQuestion} disabled={selectedOption === null && timer > 0}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Accounting;
