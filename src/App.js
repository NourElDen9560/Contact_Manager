import React,  { Fragment ,useState , useEffect}  from "react";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "./App.css";
import ContactDetails from "./Component/ContactDetails";
import {AddContact} from './Component/AddContact'
import {ContactList} from './Component/ContactList';

function App() {
  const Local_Storage_Key = "Contacts" ; 
const [Contacts , setContacts] = useState([
 
]) ; 
const removecontact = (id)=>{
  const renderContact = Contacts.filter((el)=>{
    return el.id !== id; 
  })
  setContacts(renderContact) ; 
}  

  const AddContacts = (new_Contact)=>{
     console.log(new_Contact);
setContacts([...Contacts , new_Contact ]) ; 
  }

  useEffect(()=>{
 const Data_Local_Storage = JSON.parse(localStorage.getItem(Local_Storage_Key)) ;
 setContacts(Data_Local_Storage) ; 
  } , []) ; 
  
  useEffect(()=>{
    localStorage.setItem(Local_Storage_Key ,JSON.stringify(Contacts)) ; 
  } , [Contacts]) ; 




  return (
    <div className="ui container">

<Router>
<Routes>
<Route path="/"  element={<ContactList Contacts={Contacts} removecontact={removecontact} />} />
<Route path="/add" element={<AddContact AddContacts={AddContacts}/>} />
<Route path="/ContactDetails/:id" element={<ContactDetails/>} />
</Routes>
</Router>

      {/* <AddContact AddContacts={AddContacts}/>
      <ContactList Contacts={Contacts} removecontact={removecontact} /> */}


    </div>
  );
}

export default App;
