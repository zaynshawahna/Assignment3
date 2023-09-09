


import React from 'react'

function Message({ret1,ret2}) {
    let color;
    let backColor;
    let retValue;
    if (ret1==="added successfuly") {
        color='green';
        
    }
    else{
        color='red';
    }
   
    if(ret2===false){
        retValue="";
         }
         else {
             backColor="rgba(40, 44, 52, 1)";
             retValue= <div  style={{color:color,position:'absolute',top:300,right:260,backgroundColor:backColor,width:1000,height:200,borderRadius:50}}  ><br></br> <br></br>{ret1}<br></br>Click   </div>;
         }


  return (
    <div >
        {retValue}

    </div>

  )
}

export default Message