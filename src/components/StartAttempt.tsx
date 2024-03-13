import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [workingQuiz, setWorkingQuiz] = useState<boolean>(false);
    const startQuiz = () => {
        if (attempts > 0) {
            setWorkingQuiz(true);
            setAttempts(attempts - 1);
        }
    };
    const stopQuiz = () => {
        setWorkingQuiz(false);
    };
    const mulligan = () => {
        setAttempts(attempts + 1);
    };
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={workingQuiz || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!workingQuiz}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={workingQuiz}>
                Mulligan
            </Button>
            <p>Attempts left: {attempts}</p>
        </div>
    );
}
