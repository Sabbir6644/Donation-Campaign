import { useContext, useEffect, useState } from "react";
import { DataContext } from "./Components/MainLayout";
import { getStoredObj } from "./Components/SaveToLs";
import DonationCard from "./Components/DonationCard";


const Donation = () => {
     const data = useContext(DataContext)
     const [storedData, setStoredData] = useState();
     const [isShow, setIsShow] = useState(false);
     useEffect(() => {
          const storedTitle = getStoredObj()
          setStoredData(storedTitle)
     }, [data])

     return (
          <div className=" max-w-7xl mx-auto my-10">
               <div className="grid md:grid-cols-2 gap-4">
                    {
                        isShow && storedData?.length > 4 ? storedData?.map((data, index) => <DonationCard key={index} data={data}></DonationCard>): 
                        storedData?.slice(0, 4)?.map((data, index) => <DonationCard key={index} data={data}></DonationCard>)

                    }
               </div>

               <div>
                    <div className="flex justify-center my-8">
                         {
                              storedData?.length < 5 || isShow ? "" : <button onClick={() => setIsShow(!isShow)} className="btn text-white bg-[#009444] rounded-md py-1 px-2 ">See All</button> 
                              
                         }

                    </div>
               </div>
          </div>

     );
};

export default Donation;