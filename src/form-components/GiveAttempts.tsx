import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    const use = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    };
    const requests = () => {
        if (!isNaN(parseInt(request))) {
            setAttempts(attempts + parseInt(request));
            setRequest("");
        }
    };
    const input = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequest(event.target.value);
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <input type="number" value={request} onChange={input} />
            <button onClick={use} disabled={attempts === 0}>
                Use
            </button>
            <button onClick={requests}>Gain</button>
        </div>
    );
}
