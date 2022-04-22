import React from "react";
import "./App.css";
import TitleBar from "./components/titleBar";
import PictureBox from "./components/picture";
import styled from "styled-components";
function App() {
  const Container = styled.div`
  background-color: black;
  text-align: center;
  height: 100vh
  `
  return (
    <Container>
     <TitleBar/> 
     <PictureBox/>
    </Container>
  );
}

export default App;
