import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header";
import { createContext } from "react";
export const DataContext = createContext();

const MainLayout = () => {
     const data = useLoaderData();
     return (
          <div className="max-w-7xl mx-auto">
               <Header></Header>
               <DataContext.Provider value={data}>
               <Outlet></Outlet>
               </DataContext.Provider>
               
               
          </div>
     );
};

export default MainLayout;