import { useContext } from "react";
import { DataContext } from "./MainLayout";
import Cards from "./Cards";


const Home = () => {
     const data = useContext(DataContext)
     // console.log(data);
     return (
       <div>
             <div className="bg-green-200 min-h-[100px] -mt-20 ">
               <div className="pt-24 pb-6">
                    <h2 className="text-5xl font-bold text-center my-4">I Grow By Helping People In Need</h2>
                    <div className=" flex justify-center py-5">
                         <input className="w-[470px] h-12 rounded-md pl-3" placeholder="Search here...." type="text" />
                         <button className="bg-[#FF444A] h-12 w-28 rounded-e-md text-white font-bold -ml-28">Search</button>
                    </div>
               </div>
              
          </div>
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                         data.map((singleObj, index) =><Cards key={index} obj={singleObj}></Cards> )
                    }
               </div>
       </div>
     );
};

export default Home;