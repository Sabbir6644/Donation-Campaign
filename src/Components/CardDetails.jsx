import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./MainLayout";

const CardDetails = () => {
     const data = useContext(DataContext)
     const {title} = useParams();
     const details = data.find(card => card.title === title);
     console.log(details);
     const {picture, description, price, text_button_bg}= details;
     const btnBg = {
          backgroundColor: text_button_bg, 
        };
     return (
          <div className="my-9">
               
               <div className="relative">
               <img className="w-full lg:h-[700px] " src={picture} alt="" />
               <button className="absolute bottom-7 left-7 text-xl text-white font-bold py-4 px-6 rounded-md" style={btnBg}>Donate ${price}</button>
               <div className=" absolute bottom-0 w-full  h-[130px] bg-gradient-to-t from-transparent to-[#0b0b0b80]"></div>
               </div>
               <h2 className="my-7 text-4xl font-bold">{title}</h2>
               <p className="text-justify">{description}</p>
          </div>
     );
};

export default CardDetails;