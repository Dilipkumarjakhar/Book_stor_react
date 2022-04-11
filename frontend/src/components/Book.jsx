import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
// import {Order} from './Order'

export const Book = (probs) => {
  let [data, setdata] = useState([{}]);
  let [secdata, setsecdata] = useState([{}]);
  
  
  
  let navigate =useNavigate();

  useEffect(() => {
    getdata();
  }, []);

//   -----

const toComponentB=(d)=>{
    navigate('/order',
    
    {state:{id:d._id,name:d.bookName,img:d.bookimage,price:d.bookPrice,auther:d.autherName}}
    // {state:buydata.json()}
    );
      }


  async function getdata() {
    let url = "http://localhost:5000/";
    let response = await fetch(url);
    let Data = await response.json();
    setdata(Data);
  }


  function buyBook(d) {

       
    //   console.log('d:', d)
   
   
      toComponentB(d)
   
      
      
    }
// -----search book------  
function search(){
    let url = "http://localhost:5000/book";
    let response = await fetch(url);
    let Data = await response.json();
    console.log('Data:', Data)
}
  return (
    <>
       
       
      <div className="search_div">
        <input type="text" />
        <button onKeyUp={(e)=>{
            setsecdata(e.target.value)
            }}>Search</button>
      </div>
      <div className="main_dilip">
            {data.map((data,index) => (
                <div className="dilip" key={index}>
                <img src={data.bookimage} alt="" />

            <p>Bookname:{data.bookName}</p>
            <p>Authher:{data.autherName}</p>
            <p>Rs:{data.bookPrice}</p>
            <h1>

            </h1>
            <button>AddtoCart</button>
            <button onClick={()=>buyBook(data)
                // {data._id,data.bookimage,data.bookName,data.autherName.data.bookPrice}
            }>Buy</button>
            
           </div> 
         ))} 
         
       </div>
    </>
  );
  
}



