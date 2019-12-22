import React, { useState } from "react";

import { Container } from "./styles";

import Button from "../Button";
import Display from "../Display";

export default function Calculator() {
    const initialState = {
        displayValue: "0",
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
    };

    const [currentState, setCurrentState] = useState(initialState);

    function clearMemory() {
        setCurrentState(initialState);
    }

    function setOperation(operation) {
        console.log(operation);
    }

    function addDigit(n) {
        if (n === "." && currentState.displayValue.includes(".")) {
            return;
        }

        const clearDisplay = currentState.displayValue === "0" || currentState.clearDisplay;
        const currentValue = clearDisplay ? "" : currentState.displayValue;
        const displayValue = currentValue + n;

        let newState = { ...currentState };

        newState.displayValue = displayValue;
        newState.clearDisplay = false;

        setCurrentState(newState);

        if (n !== ".") {
            const i = newState.current;
            const newValue = parseFloat(displayValue);
            const values = [...newState.values];
            values[i] = newValue;

            newState = { ...newState };
            newState.values = values;

            setCurrentState(newState);
        }
    }

    return (
        <Container>
            <Display value={currentState.displayValue} />
            <Button label="AC" click={clearMemory} triple />
            <Button label="/" click={setOperation} operation />
            <Button label="7" click={addDigit} />
            <Button label="8" click={addDigit} />
            <Button label="9" click={addDigit} />
            <Button label="*" click={setOperation} operation />
            <Button label="4" click={addDigit} />
            <Button label="5" click={addDigit} />
            <Button label="6" click={addDigit} />
            <Button label="-" click={setOperation} operation />
            <Button label="1" click={addDigit} />
            <Button label="2" click={addDigit} />
            <Button label="3" click={addDigit} />
            <Button label="+" click={setOperation} operation />
            <Button label="0" click={addDigit} double />
            <Button label="." click={addDigit} />
            <Button label="=" click={setOperation} operation />
        </Container>
    );
}
