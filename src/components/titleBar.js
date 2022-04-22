import React from "react";
import styled from "styled-components";
function TitleBar() {
    const Title = styled.h1`
    color: Grey;
    font-size: xx-large;
    font-family: Times New Roman
    
    `
    return (
        <div className="Title">
            <Title>NASA Photo Of the Day</Title>
        </div>);
}
export default TitleBar;