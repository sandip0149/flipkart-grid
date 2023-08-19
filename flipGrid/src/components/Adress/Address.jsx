import { useState } from "react";
import "./address.css";
import { useStateContext } from "../../context";

const address = () => {

  const {updateaddress} = useStateContext();

  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [pin, setPin] = useState(null);
  const [contact, setContact] = useState(null);

  const handleadd = async () =>{
    await updateaddress(city,pin,state,contact)
  }

  return (
    <div className="flex justify-center">
      <div className="login-container">
        <section className="login">
          <header>
            <h2>Add Address</h2>
          </header>
          <div className="login-form"  >
            <input
              type="text"
              className="login-input"
              placeholder="City"
              
              autoFocus
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <input
              type="text"
              className="login-input"
              placeholder="State"
          
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <input
              type="text"
              className="login-input"
              placeholder="PIN"
              
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
              }}
            />
            <input
              type="text"
              className="login-input"
              placeholder="Contact No."
              
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <div className="submit-container">
              <button type="submit" className="login-button" onClick={() => {handleadd()}}>
                Add
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default address;
