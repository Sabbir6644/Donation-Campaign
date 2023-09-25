import { useContext, useEffect, useState } from "react";
import { DataContext } from "./Components/MainLayout";
import { getStoredObj} from "./Components/SaveToLs";
import DonationCard from "./Components/DonationCard";


const Donation = () => {
     const data = useContext(DataContext)
     const [storedData, setStoredData]= useState();
     useEffect(()=>{
          const storedTitle = getStoredObj()
          setStoredData(storedTitle)
     },[data])
     // console.log(storedData);

     
     return (
          <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto my-10">
               {
                    storedData?.map((data,index)=><DonationCard key={index} data={data}></DonationCard>)
               }

          </div>
     );
};

export default Donation;