import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setCurrentColorIndex
}: {
    setCurrentColorIndex: (index: number) => void;
}): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const handleColorChange = () => {
        const nextIndex = (1 + colorIndex) % COLORS.length;
        setColorIndex(nextIndex);
        setCurrentColorIndex(nextIndex); // Update the current color index
    };

    return <Button onClick={handleColorChange}>Next Color</Button>;
}

function ColorPreview({ color }: { color: string }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [currentColorIndex, setCurrentColorIndex] =
        useState<number>(DEFAULT_COLOR_INDEX);
    const currentColor = COLORS[currentColorIndex];

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <ChangeColor setCurrentColorIndex={setCurrentColorIndex} />
                <ColorPreview color={currentColor} />
            </div>
        </div>
    );
}
