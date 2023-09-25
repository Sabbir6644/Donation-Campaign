import Swal from "sweetalert2";

const getStoredObj = ()=>{
     const StoredTitle = localStorage.getItem('donation');
if(StoredTitle){
     return JSON.parse(StoredTitle);
}
return [];
}
const SaveToLocalStorage = (obj)=>{
     const storedTitle = getStoredObj();

     storedTitle.push(obj);
          localStorage.setItem('donation', JSON.stringify(storedTitle))        
          return Swal.fire(
               'Your Donation Success!',
               'Please clicked the button!',
               'success'
             )
     
}
export {getStoredObj, SaveToLocalStorage}