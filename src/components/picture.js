import React, {useState, useEffect} from "react";
import axios from "axios";
function PictureBox() {
    const [photoDay, setPhotoDay] = useState('');
    useEffect(() => {
        console.log("here")
        axios('https://api.nasa.gov/planetary/apod?api_key=Y7q7Hi1eFc972JbiJSojHU2t0sRc4cj05gevOtal&date=2022-04-20')
        .then((data) => {
            console.log(data)
        setPhotoDay(data.data.url)
        },[])
    })
    return (
        <div className="Picture">
            <img src={photoDay}/>
        </div>
    )
}
export default PictureBox;