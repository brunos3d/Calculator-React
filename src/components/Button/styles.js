import styled from "styled-components";

export const Container = styled.button`
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;

    & {
        font-size: 1.4rem;
        background: var(--bg-button);
        border: none;
        border-right: var(--border-button);
        border-bottom: var(--border-button);
        outline: none;
    }
`;
