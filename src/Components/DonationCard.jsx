import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({data}) => {
     const {picture, price, category, title, category_bg, card_bg, text_button_bg
     }= data;

     const cardStyle = {
          backgroundColor: card_bg, 
        };
     const catagoryStyle = {
          backgroundColor: category_bg,
          color: text_button_bg,
        };
        const btnBg = {
          backgroundColor: text_button_bg,
         
        }
     const btnTextColor = {
          color: text_button_bg, 
        };
     return (
          <div>

<div className="flex rounded-xl shadow-md" style={cardStyle}>
  <div>
    <img className="w-full h-full rounded-tr-md rounded-tl-md"
      src={picture}
      alt="img-blur-shadow"
     
    />
  </div >
  <div className="p-6">
    <button className="mb-2 font-semibold py-1 px-3 rounded-md" style={catagoryStyle}>
      {category}
    </button>
    <p className="text-xl font-bold">
      {title}
    </p>
    <p className="mt-2 font-bold" style={btnTextColor}>
      {price}
    </p>
    <Link to={`/Details/${title}`}>
    <button className="my-2 font-semibold py-1 px-3 rounded-md text-white" style={btnBg}>
    View Details
    </button>
    </Link>
  </div>
  
</div>

          </div>
     );
};
DonationCard.propTypes = {
     data: PropTypes.object
};
export default DonationCard;