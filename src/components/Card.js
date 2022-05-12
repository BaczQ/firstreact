import React from "react";
import image from '../images/photo.jpg';

const Card = () => {
  return (
    
        <div className="card box-shadow-1">
                    <div className="card__side-content">
                        <h2>Login</h2>
                        <img className="card__avatar" src={image} />
                    </div>
                    <div className="card__content">11121 11111111111111 1111111111<br/>
                        1112121111111 11111111111111111<br/>
                        11121 211111111111111 1111111111<br/>
                        1112121111111 11111111111111111<br/>
                        111212111111111111 11111111111111111<br/>
                        111212111 111111111111111111111<br/>
                        1112121211111111111111111111 111<br/>
                        11121211111 1111111111111111111<br/>
                        11121 2111111111111111111111111<br/></div>
                </div>
    
  );
};

export default Card;
