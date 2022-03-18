import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HistoryRouterProps } from "react-router-dom";
export const AddContact = (props) => {
 const dateee = new Date(); 
 const navigate = useNavigate();
  const [state, setstate] = useState({
    Name: "",
    Email: "",
  });
  const ValidationAndSubmit = (e) => {
    e.preventDefault();
    if (state.Name === "" || state.Email === "") {
      alert(`CANNOT ADD YOUR CONTACT UNTIL FIELD EMPTY`);
      //return;
    }
     else {
     state.id = dateee; 
      props.AddContacts(state);
      setstate({
        Name: "",
        Email: "",
      });
//HistoryRouterProps.push('/add');
//window.history.pushState({}, undefined, "/");   

navigate('/');
    }
     
  };
 
  return (
    <Fragment>
      <div className="ui main">
        <h2> Add Contact </h2>{" "}
        <form className="ui form"  onSubmit={ValidationAndSubmit} >
          <div className="field">
            <label> Name: </label>{" "}
            <input
              type="text"
              placeholder="enter your name"
              value={state.Name}
              onChange={(e) =>
                setstate({ Name: e.target.value, Email: state.Email })
              }
            />{" "}
          </div>{" "}
          <div className="field">
            <label> Email: </label>{" "}
            <input
              type="text"
              placeholder="Enter Your Email"
              value={state.Email}
              onChange={(e) =>
                setstate({ Name: state.Name, Email: e.target.value  })
              }
            />
          </div>
          <button className="ui button blue" >
            Add
          </button>
          <button className="ui button red" onClick={(e)=> navigate("/")}> Back </button>
        </form>{" "}
      </div>{" "}
    </Fragment>
  );
};
