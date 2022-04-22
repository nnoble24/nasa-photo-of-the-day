import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const Pic = styled.img`
    border-radius: 50%;
    `
const TextData = styled.h2`
color: grey;
text-allignment: center;
font-size: large;
font-family: times new roman;
`

function PictureBox() {
    const [NasaData, setNasaData] = useState('');
    
    useEffect(() => {
        const fetchData = () => {
            console.log("here")
            axios('https://api.nasa.gov/planetary/apod?api_key=Y7q7Hi1eFc972JbiJSojHU2t0sRc4cj05gevOtal')
            .then((data) => {
                console.log(data)
            setNasaData(data.data)
        })}
    fetchData()
        
    },[setNasaData])
    return (
        <div>
            <Pic src={NasaData.url}/>
            <div>
             <TextData>{NasaData.title}</TextData>
             <TextData>{NasaData.explanation}</TextData>
             <TextData>{NasaData.date}</TextData>   
            </div>
        </div>
        
    )
}
export default PictureBox;