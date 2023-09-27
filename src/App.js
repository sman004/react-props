import React from "react";
import Card from "./components/Card";
import contacts from "./components/contact";

// method to pass into the map fuction to loop through the contacts array
  function createCard(contact) {
    return (
          <Card
          // key is for unique identity of each object to the contacts array to display on the page
           key = {contact.key}
           name ={contact.name}
           img = {contact.imgURL}
           tel = {contact.phone}
           email= {contact.email}
          
          />
    );
  }
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* 
        passsing the createCard method to the map fuction      
      */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
