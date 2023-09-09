import React from 'react'
import { useState } from 'react';

import Message from './Message';
function Loan() {
    const [Loan,setLoan]=useState({name:"",
    phoneNumber:"",
    age:"",
    salary:"",
    isEmployee:false
});



  const[message,setMessage]=useState("");
  const[showModal,setshowModal]=useState(false);


  function handelSubmet(){
    setshowModal(true);
     
     const {age,phoneNumber}=Loan;

   
      if(isNaN(phoneNumber))
     {
        setMessage("the phoneNumber is not valid");
      
     }
     else if (phoneNumber.length<10)
     {
        setMessage("the phoneNumber is too short");
      
     
     }
     else if(age<18||age>65){
        setMessage("the age is not valid");
       }
  else {
    setMessage("added successfuly");
      
 
  }


  }


console.log("name",Loan.name,"phone",Loan.phoneNumber,"age",Loan.age,"isEmployee",Loan.isEmployee)
  return (
    <div style={{backgroundColor:'#282c34',borderRadius:20,width:600,height:500 ,color:'#ffa53f',padding:30}} >
        <form  onSubmit={(event)=>{
            event.preventDefault();
            
        }}>
        <h3  style={{textAlign:'left',paddingLeft:10}}>
    Requesting a Loan 
   </h3>
   <hr style={{width:570}}></hr>
   
   <label style={{textAlign:'start',paddingRight:510}}>
    Name:
   </label>
   <br>
   </br>
   <input style={{width:570}} placeholder='enter your name '   value={Loan.name} onChange={
    (event)=>{
        
       setLoan({...Loan,name:event.target.value})
    }
   }>
   </input>
   <br></br>
   <label style={{textAlign:'start',paddingRight:410}} >
    Phone Number:
   </label>
   <br>
   </br>

   <input style={{width:570}} placeholder='enter your phone number ' value={Loan.phoneNumber} onChange={
    (event)=>{
        
       setLoan({...Loan,phoneNumber:event.target.value})
    }
   }>
   </input>
   <br></br>
   <label style={{textAlign:'start',paddingRight:530}}>
    Age:
   </label>
   <br>
   </br>
   <input style={{width:570}} placeholder='enter your age'  value={Loan.age} onChange={
    (event)=>{
        
       setLoan({...Loan,age:event.target.value})
    }
   }>
   </input>
   <br></br>
   <label style={{textAlign:'start',paddingRight:510}}>
    Salary:
   </label>
   <br>
   </br>
   <select style={{width:570}}  value={Loan.salary} onChange={
    (event)=>{
        
       setLoan({...Loan,salary:event.target.value})
    }
   }>
    <option>less than 500$</option>
    <option>bettwen 500$ and 1000$</option>
    <option>larger than 1000$</option>
   </select>
   <br></br>
   <br>
   </br>

   <label>Are you an employee</label>
   <br>
   
   </br>
   <input  type ="checkbox" checked={Loan.isEmployee} onChange={
    (event)=>{
        
       setLoan({...Loan,isEmployee:event.target.checked})
    }
   }/>
   <br>
   </br>
   <button  style={{backgroundColor:'#ffa53f',color:'#ffffff',width:100,borderRadius:7,height:30}} type="submit" disabled={Loan.age===""|| Loan.name===""|| Loan.phoneNumber===""|| Loan.isEmployee===false} onClick={handelSubmet}>
     submet
   </button>
        </form>
  
<div  onClick={()=>{
   
         const newVal={...Loan};
         setshowModal(false);
        setLoan(newVal);

    }}>
<Message  ret1={message} ret2={showModal} /> 
</div>
    

   
    </div>
  )
}

export default Loan