import React from "react";
import avatar from "../Images/avatar.png";
import { Link, useLocation } from "react-router-dom";
const ContactDetails = (props) => {
   // const {Name , Email} = props.location.state.contacts;
   const location = useLocation();
   //const {Name , Email} = location.state.props.contact;
    console.log(location.state.contact) ;
    const DataCard = JSON.parse(location.state.contact) ; 
    const {Name , Email} = DataCard ; 
  return (
    <div className="main ">
      <div className="ui card center">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>{" "}
        <div className="content">
          <div className="header"> {Name} </div>{" "}
          <div className="discription">{Email} </div>{" "}
        </div>
      </div>
      <div className="center-div">
<Link to={'/'}> <button className="ui button blue center ">Back To Contact List</button> </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
