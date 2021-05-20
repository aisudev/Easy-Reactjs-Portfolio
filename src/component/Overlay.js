import styled from "styled-components";

const Overlay = styled.video`
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    filter: contrast(1.1);
    z-index: -999;
`

export default Overlay
