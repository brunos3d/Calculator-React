import styled from "styled-components";

export const Container = styled.div`
    width: 235px;
    height: 320px;

    overflow: hidden;
    border-radius: 5px;

    /* background: orange; */
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-auto-rows: 1fr 48px 48px 48px 48px 48px;
`;
