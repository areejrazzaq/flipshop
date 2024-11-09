import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function DashBoard() {
  const data  = useLoaderData();
  console.log(data)
  return (
    <>
        <div className="px-2 services">
        <div className="container">
        <div className="row g-3 my-2" data-aos="fade-up" data-aos-delay="100">
                
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
                    <i className="bi bi-body-text p-3 fs-1 text-success"></i>
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
          <caption className="fs-4">Details</caption>
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
                        Waiting for Approval:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_created}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm accepted font-weight-bold">
                        Accepted Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_accepted}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm process font-weight-bold">
                        In Process Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_in_process}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Completed Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_completed}</span>
                    </span>
                </div>
                <div className="d-flex flex-column rejected ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Rejected Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_rejected}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Aborted Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_aborted}</span>
                    </span>
                </div>

                <Link to="/seller/listing" className="readmore stretched-link">
                  Read more <FontAwesomeIcon icon={["bi", "bi-arrow-right"]} />{" "}
                  <i className="bi bi-arrow-right"></i>
                </Link>

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
                        In Migration: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_in_migration}</span>
                    </span>
                </div>
                <div className="d-flex flex-column accepted">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Completed: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_completed}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Aborted: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_aborted}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold text-danger">
                        Rejected: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.transactions_rejected}</span>
                    </span>
                </div>

                <Link to="/seller/transaction" className="readmore stretched-link">
                  Read more <FontAwesomeIcon icon={["bi", "bi-arrow-right"]} />{" "}
                  <i className="bi bi-arrow-right"></i>
                </Link>
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
                    <span className="mb-2 text-sm font-weight-bold">
                        Paid: 
                        <span className="text-dark ms-sm-2 font-weight-bold ">{data.invoices_paid}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold text-success">
                        Sent: 
                        <span className="text-dark ms-sm-2 font-weight-bold ">{data.invoices_sent}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Overdue: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_over_due}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold rejected">
                        Reverted: 
                        <span className="text-dark ms-sm-2 font-weight-bold ">{data.invoices_reverted}</span>
                    </span>
                </div>
                <Link to="/seller/transaction" className="readmore stretched-link">
                  Read more <FontAwesomeIcon icon={["bi", "bi-arrow-right"]} />{" "}
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* forth */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item  position-relative">
                <div className="icon">
                  <FontAwesomeIcon icon={["bi", "bi-activity"]} />
                  <i className="bi bi-activity"></i>
                </div>
                <h3>Assets</h3>
                <div className="d-flex flex-column ">                
                      <span className="mb-2 text-sm font-weight-bold">
                          Total Assets: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.total_assets}</span>
                      </span>
                    </div> 
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
                      <span className="mb-2 text-sm font-weight-bold ">
                          Under Review Assets: 
                          <span className="text-dark ms-sm-2 font-weight-bold ">{data.assets_under_review}</span>
                      </span>
                    </div> 
                <Link to="/seller/listing" className="readmore stretched-link">
                  Read more <FontAwesomeIcon icon={["bi", "bi-arrow-right"]} />{" "}
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard