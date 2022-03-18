import React from "react";
import { Link } from "react-router-dom";
import user from "../Images/user.png"
//import ContactList from './ContactList' ;
const ContactCard = (props) => {
  const {  Name, Email , id } = props.contact;
  return (
    <div className="item" key={id}>
<img className="ui  avatar image" src={user} alt="avatar" />
      <div className="content">
      <Link to={`/ContactDetails/${id}`}  state={{ contact  :JSON.stringify(props.contact) }}  >
      <div className="header"> {Name} </div>
        <div> {Email} </div>
</Link>


      </div>
      <i className="trash alternate outline icon" style={{color:'red' ,cursor:"pointer" , marginTop:'7px' , float:"right"}} onClick={()=> props.DeleteHandler(id)}  > </i>
    </div>
  );
};
export default ContactCard;
