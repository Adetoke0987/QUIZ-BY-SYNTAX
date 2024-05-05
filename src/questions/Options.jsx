import React, { useState } from 'react';
import './options.css';

const Option = ({ options, onNext }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNext = () => {
        if (selectedOption !== null) {
            onNext(selectedOption);
            setSelectedOption(null);
        } else {
            alert("Please select an option!");
        }
    };

    return (
        <div className="option-container">
            <div className="optionContainer">
                {options.map((option, index) => (
                    <div className="option-item" key={index}>
                        <input
                            className="option-radio"
                            type="radio"
                            id={`option${index}`}
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                        />
                        <label className="option-label" htmlFor={`option${index}`}>{option}</label>
                    </div>
                ))}
            </div>
            <button className="next-button" onClick={handleNext}>Next</button>
        </div>
    );
};

export default Option;
