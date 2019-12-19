
import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./PictureCard";

const PictureInfo = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [explanation, setExplanation] = useState();

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=wTUoKm845elZIdRqiJ63jHxfVCKtFgwOqXOxVcbn')
            .then(response => {
                setTitle(response.data.title);
                setDate(response.data.date);
                setImage(response.data.url);
                setExplanation(response.data.explanation);
                console.log(response);
            });
    }, []);

    return (
        <div className="container">
            <PictureCard title = {title} image = {image} day = {date} text = {explanation} /> 
        </div>
    )
}

export default PictureInfo; 






// Old code
// export default function PictureInfo() {
//   const [picData, setPicData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://api.nasa.gov/planetary/apod?api_key=wTUoKm845elZIdRqiJ63jHxfVCKtFgwOqXOxVcbn/")
//       .then(response => {
//         setPicData(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log("The data was not returned", error);
//       });
//   }, []);

//   return (
//     <div className="picture">
//       {picData.map(picture => {
//         return (
//         <PictureCard 
//         key={picture.id}
//         date={picture.date}
//         url={picture.url}
//         title={picture.title}
//         explanation={picture.explanation}/>
//         )
//       })}
//     </div>
//   );
// }
