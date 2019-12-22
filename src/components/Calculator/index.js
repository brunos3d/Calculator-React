import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

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
        if (currentState.current === 0) {
            let newState = { ...currentState };

            newState.current = 1;
            newState.clearDisplay = true;
            newState.operation = operation;

            setCurrentState(newState);
        } else {
            const equals = operation === "=";
            const currentOperation = currentState.operation;

            const values = [...currentState.values];
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            } catch (e) {
                values[0] = currentState.values[0];
            }

            values[1] = 0;

            setCurrentState({
                displayValue: values[0],
                clearDisplay: !equals,
                operation: equals ? null : operation,
                values,
                current: equals ? 0 : 1
            });
        }
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
            <KeyboardEventHandler handleKeys={["numeric", "."]} onKeyEvent={(key, e) => addDigit(key)} />
            <KeyboardEventHandler handleKeys={["/", "*", "-", "+"]} onKeyEvent={(key, e) => setOperation(key)} />
            <KeyboardEventHandler handleKeys={["enter"]} onKeyEvent={(key, e) => setOperation("=")} />
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
