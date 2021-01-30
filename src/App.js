// import logo from './logo.svg';
import './App.css';

import ContactCard from "./ContactCard"

function App() {
  return (
    <div className="contacts">

      <ContactCard 
        contact = {{ name: "Mr. Whiskerson",
        imgUrl: "./Koala.jpg" ,
        phone: "(2222) 555-1234", 
        email:"mr.whisker@catnap",
        others: "blahblah"
      }}
      />

      <ContactCard 
        contact = {{ name: "Fluffykins", 
        imgUrl: "./Tulips.jpg", 
        phone: "(222) 555-2334", 
        email: "fluff@me.com",
        others: "blahblah"
      }}
      />

      <ContactCard
        contact = {{ name: "Destroyer",
        imgUrl: "./Penguins.jpg", 
        phone: "(222) 555-3456", 
        email: "ofworlds@yahoo.com",
        others: "blahblah"
      }}
      />
      <ContactCard 
        contact = {{ name: "Felix", 
        imgUrl: "./Tulips.jpg", 
        phone: "(212) 555-1234", 
        email: "1thecat@gmail.com",
        others: "blahblah"
       }}
      />
      
      <ContactCard 
        contact = {{
          name: "Name",
          imgUrl: "https://google.com",
          phone: "067 7555",
          email: "knowing@gmail.com",
          others: "blahblah"
        }}
      />
    </div>
  );
}

export default App;
