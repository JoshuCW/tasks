import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [Die1, setDie1] = useState<number>(1);
    const [Die2, setDie2] = useState<number>(2);
    //const [results, setResults] = useState<string>("");
    /*const checkSameDie = (die1: number, die2: number) => {
        if (die1 === 1 && die2 === 1) {
            setResults("You Lose");
        } else if (die1 === die2) {
            setResults("You Win");
        } else {
            setResults("");
        }
    };*/
    const rollDie1 = () => {
        const num = d6();
        setDie1(num);
        //checkSameDie(Die1, num);
    };
    const rollDie2 = () => {
        const num = d6();
        setDie2(num);
        //checkSameDie(num, Die2);
    };
    return (
        <div>
            <span data-testid="left-die">{Die1}</span>
            <Button onClick={rollDie1}>Roll Left</Button>
            <br />
            <span data-testid="right-die">{Die2}</span>
            <Button onClick={rollDie2}>Roll Right</Button>
            {Die1 === 1 && Die2 === 1 && <span>You Lose</span>}
            {Die1 === Die2 && Die1 !== 1 && <span>You Win</span>}
        </div>
    );
}
