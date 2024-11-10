import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
    const data = useLoaderData(); 
    console.log(data)
  return (
    <>
    <div className="px-2 services">
        <div className="container">
            <div className="row g-3 my-2" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <h3 className="fs-2">{data.total_interest}</h3>
                    <p className="fs-5">Total Interests</p>
                    </div>
                    <i className="bi bi-person-heart text-danger p-3 fs-1"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <h3 className="fs-2">{data.total_offers}</h3>
                    <p className="fs-5">Offers Made</p>
                    </div>
                    <i className="bi bi-currency-euro p-3 fs-1 text-info"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <h3 className="fs-2">{data.total_bids}</h3>
                    <p className="fs-5">Total Bids</p>
                    </div>
                    <i className="bi bi-currency-pound p-3 fs-1 text-info"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <h3 className="fs-2">{data.total_transactions}</h3>
                    <p className="fs-5">Transactions</p>
                    </div>
                    <i className="bi-cart-plus p-3 fs-1 text-success"></i>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                    <h3 className="fs-2">{data.revenue}</h3>
                    <p className="fs-5">Total Revenue</p>
                    </div>
                    <i className="bi bi-currency-dollar p-3 fs-1 text-primary"></i>
                </div>
                </div>
            </div>
        
          <div className="row gy-4 mt-4" data-aos="fade-up" data-aos-delay="100">
{/* first box */}
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
                        Waiting for Contracts
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
                    <span className="mb-2 text-sm process font-weight-bold">
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
                    <span className="mb-2 text-sm process font-weight-bold">
                        Aborted Contracts:
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.contracts_aborted}</span>
                    </span>
                </div>

                <Link to="/buyer/transactions" className="readmore stretched-link mb-auto">
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


                <Link to="/buyer/transactions" className="readmore stretched-link mb-auto">
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
                        New Invoices: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_new}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold text-success">
                        Paid Invoices: 
                        <span className="text-dark ms-sm-2 font-weight-bold ">{data.invoices_paid}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Sent Invoices: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_sent}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold text-danger">
                        Overdue Invoices: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_over_due}</span>
                    </span>
                </div>
                <div className="d-flex flex-column ">                
                    <span className="mb-2 text-sm font-weight-bold">
                        Reverted Invoices: 
                        <span className="text-dark ms-sm-2 font-weight-bold">{data.invoices_reverted}</span>
                    </span>
                </div>
                <Link to="/buyer/payments" className="readmore stretched-link mb-auto">
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

export default Dashboard