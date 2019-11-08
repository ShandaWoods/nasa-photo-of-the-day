// Example code
import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


const PictureCard = props => {
    return (
        <div>
          <Card body outline color="primary">
            <CardImg width="100%" src={props.image} alt="Space" />
            {/* <CardImgOverlay> */}
              <CardTitle>{props.title}</CardTitle>
              <CardText>{props.text}</CardText>
              <CardText>
                <small className="text-muted">{props.day}</small>
              </CardText>
            {/* </CardImgOverlay> */}
          </Card>
        </div>
      );
}

// const PictureCard = props => {
//     return (
//         <div>
//             <h2>{props.title}</h2>
//             <h3>{props.day}</h3>
//             <img src={props.image} alt="Space"/>
//             <p>{props.text}</p>
//         </div>
        
//     )
// }
export default PictureCard;

// old code
// const PictureCard = props => {
//     return (
//       <div className="picture-data" key={props.id}>
//         <h2>Date: {props.date}</h2>
//         <p>{props.description}</p>
//         <div className="bottom">
//           <p>Title: {props.title}</p>
//           <p>Explanation: {props.explanation}</p>
//         </div>
//       </div>
//     );
//   };
//   export default PictureCard;
  