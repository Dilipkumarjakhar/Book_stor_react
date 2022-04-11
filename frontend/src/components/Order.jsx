import {useLocation} from 'react-router-dom';
import { useState} from 'react';
//  function ComponentB() {

    
    
    export const Order = () => {
    const location = useLocation();
    // console.log('props:', props)
    // console.log(location.state)
    

    
// const navigate = useNavigate();
var [name,setName]=useState()
    
const nameUpdate=(event)=>{ 
    setName(event.target.value)
}

const handleSubmit=()=> { 
    const postURL = "http://localhost:5000/register"
    fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // We should keep the fields consistent for managing this data later
            name: name,
            clockedIn:false,
            dates:[]
        })
    })
    .then(()=>{
        // Once posted, the user will be notified 
        alert('You have been added to the system!');
    })
    
}   
   
    
    
    
      
        
      
    

 return (
      <>
       <div className="bookDetalis">

          <img src={location.state.img} alt="" />
       <div className="text_div">

        <span>Book Name:{location.state.name}</span>
        <span>BookAuther:{location.state.auther}</span> 
        <span>Rs:{location.state.price}</span>  
       </div> 
      </div>
         <div className="oderer_data">
          <div className="oderer_Form">

            <form onSubmit={handleSubmit}>
              <label htmlFor="">Name</label>
              <input type="text"
                name="userName"
                required onChange={nameUpdate}
               placeholder="Enter Your Name" id="name" />
              <br />
  
              <label htmlFor="">Email</label>
              <input type="Email"
                name="userEmail"
                required onChange={nameUpdate}
              placeholder="Enter Your Email" id="email" />
              <br />
              <label htmlFor="">Phone</label>
              <input type="Number"
                name="userMobile"
                required onChange={nameUpdate} 
              id="number" placeholder="Enter Your Mobile" />
              <br />
  
              <label htmlFor="">Address</label>
              <textarea
                type="text"
                name="userAddress"
                required onChange={nameUpdate}
                placeholder="Enter Your Address"
                id="address"
              />
              <br /> 
             
               <button type="submit"  >
              Order Place
               </button> 
             </form>
          </div> 
         </div> 
      </>
    );
  };
