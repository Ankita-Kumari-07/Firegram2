import React from 'react';
//import App from '../App';


 const changeHandler = (e) =>
 {
   let selected = e.target.files[0];
   console.log(selected);
 }


const UploadForm = () =>{
    return(
        <form>
            <input type="file" onchange={changeHandler}/>
        </form>
    )
}

export default UploadForm;