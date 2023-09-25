
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getStoredObj } from './SaveToLs';
import { useEffect, useState } from 'react';

const Charts = () => {

   
    const [remaining , setRemaining]= useState();
    const [saveData, setDataLength]= useState();
    useEffect(() => {
         const storedData = getStoredObj()
         setDataLength(storedData.length);
         setRemaining(12- storedData.length)
    }, [])
   
    const data = [
     { value: saveData }, 
     { value: remaining }, 
 ];

    const COLORS = ['#00C49F', '#FF444A']; 

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className='font-bold text-lg' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <>
           <div className="flex flex-col-reverse">
           <div>
            <div className="row d-flex justify-content-center text-center">
                <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                    <p>Your Donation</p>
                    <div style={{ backgroundColor: COLORS[0], width: '100px', height: '12px', display: 'inline-block', marginRight: '8px' }}>
                    
                    </div>
                    
                    </div>
                    <div className="flex gap-1 items-center">
                    <p>Total Donation</p>
                    <div style={{ backgroundColor: COLORS[1], width: '100px', height: '12px', display: 'inline-block', marginLeft: '8px' }}></div>
                    
                    </div>
                </div>
            </div>
            </div>
           <div>
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-8">
                        <ResponsiveContainer width={400} height={400} className="text-center">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            
           
            
           </div>
        </>
    )
}

export default Charts;
