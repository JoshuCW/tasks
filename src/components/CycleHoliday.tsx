import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Christmas", emoji: "🎄" },
    { name: "Thanksgiving", emoji: "🦃" },
    { name: "Easter Sunday", emoji: "🥚🐇" },
    { name: "Fourth of July", emoji: "🎆" },
    { name: "New Years", emoji: "🍾" }
];

export function CycleHoliday(): JSX.Element {
    const [current, setCurrent] = useState<number>(0);
    const moveForward = () => {
        setCurrent((current + 1) % holidays.length);
    };
    const moveForwardYear = () => {
        setCurrent((current + 1) % holidays.length);
    };
    return (
        <div>
            <p>Holiday: {holidays[current].emoji}</p>
            <Button onClick={moveForward}>Advance by Alphabet</Button>
            <Button onClick={moveForwardYear}>Advance by Year</Button>
        </div>
    );
}
