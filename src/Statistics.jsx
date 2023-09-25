import { useEffect, useState } from 'react';
import { getStoredObj } from './Components/SaveToLs';
import { Cell, Label, Pie, PieChart, Tooltip } from 'recharts';

const Statistics = () => {
    
     const [remaining , setRemaining]= useState();
     const [saveData, setDataLength]= useState();
     useEffect(() => {
          const storedData = getStoredObj()
          setDataLength(storedData.length);
          setRemaining(12- storedData.length)
     }, [])
    
     const data = [
          { name: 'Donation', value: saveData },
          { name: 'Remaining', value: remaining },
        ];

        const calculatePercentage = (donateData, totalData) => ((donateData / totalData) * 100).toFixed(2);

     return (
          <div className='my-8 flex justify-center max-w-7xl mx-auto'>
<div>
<PieChart width={300} height={300}>
<Pie
dataKey="value"
data={data}
cx="50%"
cy="50%"
outerRadius={120}
>
{data.map((entry, index) => (
  <Cell key={`cell-${index}`} fill={index === 0 ? '#FF444A' : '#00C49F'} />
))}
{data.map((entry, index) => (
  <Label
    key={`label-${index}`}
    style={{ fill: 'white', fontSize: '14px' }}
  > 
  </Label>
))}
</Pie>
          <Tooltip />
        </PieChart>
        <div className='flex justify-center'>
          <div>
          <p>{`Your donation: (${calculatePercentage(saveData, 12)}%)`}</p>
          <p>{`Remaining: (${calculatePercentage(remaining, 12)}%)`}</p>
          </div>
        </div>
             

</div>
          
        </div>
     );
};

export default Statistics;



