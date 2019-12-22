import React from "react";

import { Container } from "./styles";

export default function Button(props) {
    let classes = "button ";
    classes += props.double ? "double" : "";
    classes += props.triple ? "triple" : "";
    classes += props.operation ? "operation" : "";

    return (
        <Container onClick={e => props.click && props.click(props.label)} className={classes}>
            {props.label}
        </Container>
    );
}
