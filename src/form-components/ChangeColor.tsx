import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan"
];

export function ChangeColor(): JSX.Element {
    const [color1, setColor] = useState<string>("");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <Form.Check
                    key={index}
                    type="radio"
                    inline
                    label={
                        <div
                            style={{
                                position: "relative",
                                display: "inline-block"
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "30px",
                                    height: "30px",
                                    backgroundColor: color
                                }}
                            ></div>
                            <span style={{ paddingLeft: "40px" }}>{color}</span>
                        </div>
                    }
                    value={color}
                    checked={color1 === color}
                    onChange={handleColorChange}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color1,
                    marginTop: "10px"
                }}
            >
                Your color is {color1}
            </div>
        </div>
    );
}
