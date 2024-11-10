import React from 'react'
import Table2 from '../UI/Tables/Table2'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';

function Transactions() {
  const data = useLoaderData(); 
  //this state is used to handle the drop down value change
  // this will contain the value such as blocked or active user
  const [filter, setFilter] = useState("All");
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  //this state will manage search
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) => {
    if (filter === "All") {
      return data;
    } else if (filter === "Completed") {
      return item.status === 'completed';
    } else if (filter === "Rejected") {
      return item.status === 'rejected';
    } else if (filter === "Migration") {
      return item.status === 'in_migration';
    } else if (filter === "Created") {
      return item.status === 'created';
    } else return [];
  }).filter((item) => {
    return item.asset_name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  console.log(filteredData)

  return (
   <>
   <div className="container-fluid d-flex">
          <div className=" d-flex">
            <div className="input-group me-3 col-auto">
                <span className="input-group-text text-body"><i className="bi bi-search" aria-hidden="true"></i></span>
                <input className= 'form-control' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search By Name..."/>
            </div>
          <select value={filter} onChange={handleFilterChange} className= 'form-control col-auto' placeholder="Search By Status...">
            <option className="text-body" value="All">Select Status</option>
            <option value="Created">New</option>
            <option value="Migration">In Migration</option>
            <option value="Rejected">Rejected</option>
            <option value="Completed">Completed</option>
          </select>
          </div>
      </div>
      <div className="container-fluid mt-4">
      {filteredData && filteredData.length === 0 && <p className='error-text text-center'>Sorry, no data found.</p>}
      {filteredData && filteredData.length > 0 &&  <Table2 data ={filteredData}/>}
      {!filteredData && <p className='error-text text-center'>Opps! Something went wrong. Please refresh page or try again later.</p>}
      </div>
   </>
  )
}

export default Transactions