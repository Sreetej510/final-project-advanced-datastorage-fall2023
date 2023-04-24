import React, {useState} from "react";
import Orders from "./Order";
import SearchBar from "./Search";
import ShowCustomer from "./ShowCustomer";

export default function OrderDetails() {
  const [type, setType] = useState('fullname');
  const [searchUrl, setSearchUrl] = useState('');

  return (
    <div>
      <ShowCustomer/>
      <div style={{marginTop : "70px"}}>
        Search order by Customer Info
        <SearchBar type={type} setType={setType} setSearchUrl={setSearchUrl}/>
        <Orders searchUrl={searchUrl}/>
      </div>
    </div>
  );
};