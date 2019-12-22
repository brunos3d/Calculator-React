import React from "react";

import { Container } from "./styles";

import Calculator from "./components/Calculator";

function App() {
    return (
        <Container>
            <h1>Calculadora</h1>
            <Calculator />
        </Container>
    );
}

export default App;
