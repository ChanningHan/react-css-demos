import styled from "styled-components";
import React from "react";

export default function StyledComponentDemo() {


    const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #282c34;
    width: 80vw;
    min-height: 200px;
    margin: 0 auto;
    box-shadow: 4px 4px 8px rgba(110,110,100,0.75);
`

    const Title = styled.h1`
        font-size: 5vw;
        font-weight: bold;
        color: #61dafb;
    `

    const Description = styled.p`
font-size: 4vw;
color: #61dafb;
text-shadow: 2px 2px 4px #61dafb;
`


    return <div>
        <Box>
            <Title>CSS Solutions For React</Title>
            <Description>Styled Component</Description>
        </Box>
    </div>
}

