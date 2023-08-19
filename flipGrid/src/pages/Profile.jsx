import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import Card from "../components/Card/Card";
import Loader from "../components/Loader";
import "./Profile.css";
 
import { useNavigate } from "react-router-dom";
 

const Profile = () => {
  const { getTransactions, getAdress,   getmyProducts } =
    useStateContext();
  const [home, setHome] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInfo = async () => {
    setIsLoading(true);
    
    
    const myproducts = await getmyProducts();

   
    
    setMyProducts(myproducts);
    setIsLoading(false);
     
  };

  const handleAddress = async ()=>{
    const home_address = await getAdress();
    setHome(home_address);
    console.log(home);
  }

  const handleTransaction = async () =>{
    const transactiondata = await getTransactions();
    setTransactions(transactiondata);
  }

  
  const navigate = useNavigate()
  useEffect(() => {
    handleInfo();
    handleAddress();
    handleTransaction();
    

  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      <div className="purchased-products">
        <div className="text-3xl ml-3 mt-10 text-gray-500">
          Purchased products
        </div>

        {myProducts?.map((item) => {
          return <Card key={item.pId} {...item} />;
        })}
      </div>
      <div className="transaction">
        <div className="text-3xl ml-3 mt-10 text-gray-500">
          My Transactions...
        </div>

        <div className="table2">
          <p>Amount</p>
          <p>Description </p>
           
          <p>Date</p>
        </div>
        {transactions?.map((items) => {
          return (
            <div className="table1"  key={items.date}>
              <p>{items.amount}</p>
              <p>WOW</p>
              <p>{items.date}</p>
            </div>
          );
        })}
      </div>
      <div>
      <div className="text-3xl ml-3 mt-10 text-gray-500">
        Address
      </div>

      {
         home && <div>{home?.city}</div>
      }

      

      <button onClick={() => {navigate("/add-address")}}> Update Address </button>
      </div>


    </div>
  );
};

export default Profile;
