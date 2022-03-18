import React, { Fragment , useState , useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard' ;

export const ContactList = (props) => {
 const DeleteHandler = (id)=>{
props.removecontact(id) ;
 }
//  const Contacts=[{
//    id:"1" , 
//    Name: "nour" , 
//    Email:"fjkd"
//  } , 
//  {
//  id:"2" , 
//  Name: "nour" , 
//  Email:"fjkd"
// } 
// ]
const [InputData , SetInputData]= useState('');
const FilterDivs = ()=>{
  if(InputData.length !==0){
  const New_Data = props.Contacts.filter((el)=>el.Name.includes(InputData)) ;
  return New_Data;  
  }
  return props.Contacts ; 
}

useEffect(()=>{
  FilterDivs(); 
}, [InputData])
//SetDataState(AllData);
const RenderContacts = FilterDivs().map((contact)=>{
   
    return(
<Fragment>
    <ContactCard contact={contact} key={contact.id} DeleteHandler={DeleteHandler} />
</Fragment>

    );
})

  return (
   
    <div className="main">
<h2 style={{padding :'5px'}}>
Contact List
<Link to={"/add"}><button className="ui button blue right floated">Add</button></Link>
</h2>
<hr />
<div className="ui icon input" style={{width :"100%"}}>
<input type="text" placeholder="Search..." value={InputData} onChange={(e)=> SetInputData(e.target.value)}/>
<i aria-hidden="true" className="search icon"></i>
</div>

      <div className="ui celled list">{RenderContacts} </div>
    </div>
  );
};
