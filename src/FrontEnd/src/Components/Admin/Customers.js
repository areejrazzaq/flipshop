import React from "react";
import Title from "../UI/Title/Title";
import Table1 from "../UI/Tables/BuyerTable1";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


function Customers() {
  const data = useLoaderData();
  //this state is used to handle the drop down value change
  // this will contain the value such as blocked or active user
  const [filter, setFilter] = useState("Any");
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  //this state will manage search
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) => {
    if (filter === "All") {
      return data;
    } else if (filter === "Active") {
      return item.status === 0;
    } else if (filter === "Blocked") {
      return item.status === 1;
    } else return [];
  }).filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });



  return (
    <>
      <Title page="Customers" />

      <div className="container-fluid d-flex">
          <div className=" d-flex">
            <div className="input-group me-3 col-auto">
                <span className="input-group-text text-body"><i className="bi bi-search" aria-hidden="true"></i></span>
                <input className= 'form-control' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search By Name..."/>
            </div>
          <select value={filter} onChange={handleFilterChange} className= 'form-control col-auto' placeholder="Search By Status...">
            <option className="text-body" value="All">Select Status</option>
            <option value="Blocked">Blocked</option>
            <option value="Active">Active</option>
          </select>
          </div>
      </div>

      <div className="container-fluid py-4">
        {data && data.error && (
          <p className="error-text d-flex justify-content-center">
            {data.error}
          </p>
        )}
        {filteredData && filteredData.length > 0 && <Table1 data={filteredData} />}
        {filteredData && filteredData.length === 0 && (
          <p className="error-text d-flex justify-content-center align-items-center">
            Sorry! No User Found.
          </p>
        )}
      </div>
    </>
  );
}

export default Customers;
