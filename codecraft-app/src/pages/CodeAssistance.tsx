import React, { useState } from "react";

const CodeAssistance = () => {
    const [codeInput, setCodeInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestions = () => {
        // Mock suggestions
        const exampleSuggestions = [
            "Use const instead of var for variables.",
            "Consider using arrow functions for shorter syntax.",
            "Avoid global variables for better scope management."
        ];
        setSuggestions(exampleSuggestions);
    };

    return (
        <div>
            <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="Enter your code here..."
            />
            <button onClick={getSuggestions}>Get Suggestions</button>
            <div>
                {suggestions.map((suggestion, index) => (
                    <div key={index}>{suggestion}</div>
                ))}
            </div>
        </div>
    );
};

export default CodeAssistance;
