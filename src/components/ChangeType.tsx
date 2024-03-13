import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [current, setCurrent] = useState<string>("short_answer_question");
    const toggle = () => {
        setCurrent(
            current === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };
    return (
        <div>
            <Button onClick={toggle}>Change Type</Button>
            {current === "multiple_choice_question" && <p> Multiple Choice</p>}
            {current === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );
}
