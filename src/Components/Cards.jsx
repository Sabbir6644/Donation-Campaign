import PropTypes from 'prop-types';
import { createContext } from "react";
import { Link } from "react-router-dom";
export const CardContext = createContext();


const Cards = ({obj}) => {
     const {picture, category, title, category_bg, card_bg, text_button_bg
     }= obj;
     const cardStyle = {
          backgroundColor: card_bg, 
        };
     const catagoryStyle = {
          backgroundColor: category_bg,
          color: text_button_bg,
        };
     const btnTextColor = {
          color: text_button_bg, 
        };
       
     return (
          <div>
<Link to={`/Details/${title}`}>
<div className="rounded-xl shadow-md" style={cardStyle}>
  <div>
    <img className="w-full rounded-tr-md rounded-tl-md"
      src={picture}
      alt="img-blur-shadow"
     
    />
  </div >
  <div className="p-6">
    <button className="mb-2 font-semibold py-1 px-3 rounded-md" style={catagoryStyle}>
      {category}
    </button>
    <p className="text-xl font-bold" style={btnTextColor}>
      {title}
    </p>
  </div>
  
</div>
</Link>
          </div>
     );
};
Cards.propTypes = {
  obj: PropTypes.object
};
export default Cards;



