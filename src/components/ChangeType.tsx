import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipType(): void {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {questionType === "multiple_choice_question" && (
                <p>Multiple Choice</p>
            )}
            {questionType === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );
}
