import React, { useState, useEffect } from "react";

const TimerCounter = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (isRunning) {
                setTimer(prevTimer => prevTimer + 1);
            }
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setTimer(0);
        setIsRunning(true);
    };

    return (
        <div className="app-container">
            <h1>Timer: {timer}</h1>
            <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default TimerCounter;