import React from "react";
import Title from "../UI/Title/Title";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home({ Toggle }) {
  const data = useLoaderData(); 
  // console.log(data)
  return (
    <>
      <Title page="Dashboard" />

      <div className="px-2 services">
        <div className="container">
        <div className="row g-3 my-2" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <p className="fs-5">Total Users</p>
                    <h3 className="fs-2">{data.total_users + 1}</h3>
                    </div>
                    <i className="bi bi-person text-danger p-3 fs-1"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <p className="fs-5">Total Assets</p>
                    <h3 className="fs-2">{data.total_assets}</h3>
                    </div>
                    <i className="bi bi-table p-3 fs-1 text-info"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <p className="fs-5">Total Queries</p>
                    <h3 className="fs-2">{data.total_messages}</h3>
                    </div>
                    <i className="bi-patch-question p-3 fs-1 text-success"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <p className="fs-5">Total Revenue</p>
                    <h3 className="fs-2">{data.revenue}</h3>
                    </div>
                    <i className="bi bi-currency-dollar p-3 fs-1 text-primary"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <p className="fs-5">Total Contract</p>
                    <h3 className="fs-2">{data.total_contracts}</h3>
                    </div>
                    <i className="bi bi-body-text p-3 fs-1 text-info"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <p className="fs-5">Total Transactions</p>
                    <h3 className="fs-2">{data.total_transactions}</h3>
                    </div>
                    <i className="bi bi-arrow-left-right p-3 fs-1 text-warning"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <p className="fs-5">Total Invoices</p>
                    <h3 className="fs-2">{data.total_invoices}</h3>
                    </div>
                    <i className="bi bi-credit-card-2-back p-3 fs-1 text-secondary"></i>
                </div>
                </div>
            </div>



          <div className="row gy-4 mt-3" data-aos="fade-up" data-aos-delay="100">
          <div className="fs-4">Details</div>
          {/* first */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item  position-relative">
                <div className="icon">
                  <FontAwesomeIcon icon={["bi", "bi-activity"]} />
                  <i className="bi bi-activity"></i>
                </div>
                <h3>Contracts</h3>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Total Contracts: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.total_contracts}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Waiting for Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_created}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">   
                <span className="mb-2 text-sm process font-weight-bold">
                        In Process Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_in_process}</span>
                    </span>             
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm accepted font-weight-bold">
                        Accepted Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_accepted}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Rejected Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_rejected}</span>
                    </span>
                </div>
                <div className="d-flex flex-column rejected ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Completed Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_completed}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Aborted Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_aborted}</span>
                    </span>
                </div>

                {/* <Link to="/buyer/transactions" className="readmore stretched-link">
                  Read more <FontAwesomeIcon icon={["bi", "bi-arrow-right"]} />{" "}
                  <i className="bi bi-arrow-right"></i>
                </Link> */}

              </div>
            </div>
{/* second */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item  position-relative">
                <div className="icon">
                  <FontAwesomeIcon icon={["bi", "bi-activity"]} />
                  <i className="bi bi-activity"></i>
                </div>
                <h3>Transactions</h3>

                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Total Transactions: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.total_transactions}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        New: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_new}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        In process: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_in_process}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Aborted: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_aborted}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        In Migration: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_in_migration}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold text-danger">
                        Rejected: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_rejected}</span>
                    </span>
                </div>

{/* 
                <Link to="/buyer/transactions" className="readmore stretched-link">
                  Read more <FontAwesomeIcon icon={["bi", "bi-arrow-right"]} />{" "}
                  <i className="bi bi-arrow-right"></i>
                </Link> */}
              </div>
            </div>
{/* third */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item  position-relative">
                <div className="icon">
                  <FontAwesomeIcon icon={["bi", "bi-activity"]} />
                  <i className="bi bi-activity"></i>
                </div>
                <h3>Invoices</h3>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Total Invoices: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.total_invoices}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        New: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_new}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold text-success">
                        Paid: 
                        <span className="text-dark ms-sm-2 font-weight-bold ">{data.invoices_paid}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold text-danger">
                        Overdue: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_over_due}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Sent: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_sent}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Reverted: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_reverted}</span>
                    </span>
                </div>
                {/* <Link to="/buyer/payments" className="readmore stretched-link">
                  Read more <FontAwesomeIcon icon={["bi", "bi-arrow-right"]} />{" "}
                  <i className="bi bi-arrow-right"></i>
                </Link> */}
              </div>
            </div>
          </div>
        

          <div className="row pt-4 align-items-stretch" data-aos="fade-up" data-aos-delay="100">
       
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-2 text-uppercase font-weight-bold">Total Users</p>
                    <h5 className="font-weight-bolder">
                      {data.total_users + 1}
                    </h5>
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold text-success">
                          Verified: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.users_verified}</span>
                      </span>
                    </div>
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold text-warning">
                          Not Verified: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.users_non_verified}</span>
                      </span>
                    </div>
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold ">
                          Buyers: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.users_buyers + 1}</span>
                      </span>
                    </div>
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold ">
                          Sellers: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.users_sellers}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                    <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-2 text-uppercase font-weight-bold">Messages</p>
                    <h5 className="font-weight-bolder">
                      {data.total_messages}
                    </h5>
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold text-success">
                          Replied: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.messages_replied}</span>
                      </span>
                    </div> 
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold text-warning">
                          Not Replied: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.messages_not_replied}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                    <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-2 text-uppercase font-weight-bold">Assets</p>
                    <h5 className="font-weight-bolder">
                      {data.total_assets}
                    </h5>
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold">
                          Daraz Assets: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.assets_daraz}</span>
                      </span>
                    </div> 
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold">
                          Blog Assets: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.assets_blog}</span>
                      </span>
                    </div> 
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold ">
                          New Assets: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.assets_new}</span>
                      </span>
                    </div> 
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold">
                          In Progress Assets: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.assets_progress}</span>
                      </span>
                    </div> 
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold text-success">
                          Sold Assets: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.assets_sold}</span>
                      </span>
                    </div> 
                    <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold">
                          Assets Under Review: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.assets_under_review}</span>
                      </span>
                    </div> 
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                    <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
          <div className="row g-3 my-2" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3 col-md-6 p-1">
              <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">230</h3>
                  <p className="fs-5">Products</p>
                </div>
                <i className="bi bi-cart-plus p-3 fs-1"></i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-1">
              <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">2450</h3>
                  <p className="fs-5">Sales</p>
                </div>
                <i className="bi bi-currency-dollar p-3 fs-1"></i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-1">
              <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">2250</h3>
                  <p className="fs-5">Delivery</p>
                </div>
                <i className="bi bi-truck p-3 fs-1"></i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-1">
              <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">20%</h3>
                  <p className="fs-5">Increase</p>
                </div>
                <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
              </div>
            </div>
          </div> */}

          {/* <table
            className="table caption-top bg-white rounded mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <caption className="text-white fs-4">Recent Orders</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th scope="row">1</th>
                <th scope="row">1</th>
                <th scope="row">1</th>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </>
  );
}
export default Home;
