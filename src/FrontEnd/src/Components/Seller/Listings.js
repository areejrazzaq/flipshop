import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Table from "./UI/Table";

function Listings() {

  const data = useLoaderData();
  // filteres
  const [filter, setFilter] = useState("All");
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  //this state will manage search
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) => {
    if (filter === "All") {
      return data;
    } else if (filter === "Daraz") {
      return item.asset_type === 'daraz';
    } else if (filter === "Blogs") {
      return item.asset_type === 'blog';
    } else return [];
  }).filter((item) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  console.log(data);
  return (
    <>
    <div className="container-fluid d-flex">
          <div className=" d-flex">
            <div className="input-group me-3 col-auto">
                <span className="input-group-text text-body"><i className="bi bi-search" aria-hidden="true"></i></span>
                <input className= 'form-control' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search By Name..."/>
            </div>
          <select value={filter} onChange={handleFilterChange} className= 'form-control col-auto' placeholder="Search By Status...">
            <option className="text-body" value="All">Select Type</option>
            <option value="Daraz">Daraz</option>
            <option value="Blogs">Blogs</option>
          </select>
          </div>
      </div>

    <div className="container-fluid mt-3">
        {data && data.length === 0 && <p className="error-text text-center">Sorry you have no listings yet. </p>}
        {!data && <p className="error-text text-center">Opps! something went wrong. We could not load your data. Either try later of refresh page.</p>}
       
          {filteredData && filteredData.length > 0 && <Table data={filteredData} />}
        {filteredData &&  filteredData.length === 0 && (
          <p className="error-text d-flex justify-content-center align-items-center">
            Sorry! No Asset Found.
          </p>
        )}
        
    </div>
    </>
  );
}

export default Listings;
