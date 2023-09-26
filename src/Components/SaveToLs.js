import Swal from "sweetalert2";

const getStoredObj = ()=>{
     const StoredObject = localStorage.getItem('donation');
if(StoredObject){
     return JSON.parse(StoredObject);
}
return [];
}
const SaveToLocalStorage = (obj)=>{
     const storageObject = getStoredObj();

     storageObject.push(obj);
          localStorage.setItem('donation', JSON.stringify(storageObject))        
          return Swal.fire(
               'Your Donation Success!',
               'Please clicked the button!',
               'success'
             )
     
}
export {getStoredObj, SaveToLocalStorage}