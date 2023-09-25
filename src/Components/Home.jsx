import { useContext } from "react";
import { DataContext } from "./MainLayout";
import Cards from "./Cards";
import bgImage from "/src/images/bgimage.png"

const Home = () => {
     const data = useContext(DataContext)
     const backgroundStyle = {
          backgroundImage: `url(${bgImage})`,
          minHeight: "500px", // Adjust the height as needed
          marginTop: "",
          position: "relative",
          
        };
        const overlayStyle = {
       
          backgroundColor: "rgba(255, 255, 255, 0.95)", // Adjust the color and opacity as needed
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom:0,
        };
     return (
       <div> 
             <div style={backgroundStyle}>
               <div style={overlayStyle}>
               <div className="pt-24 pb-6 max-w-7xl mx-auto" >
                    <h2 className="text-5xl font-bold text-center my-4">I Grow By Helping People In Need</h2>
                    <div className=" flex justify-center py-5">
                         <input className="w-[470px] h-12 rounded-md pl-3" placeholder="Search here...." type="text" />
                         <button className="bg-[#FF444A] h-12 w-28 rounded-e-md text-white font-bold -ml-28">Search</button>
                    </div>
               </div>
               </div>
              
          </div>
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
                    {
                         data.map((singleObj, index) =><Cards key={index} obj={singleObj}></Cards> )
                    }
               </div>
       </div>
     );
};

export default Home;