import React from "react";
import Title from "../UI/Title/Title";
import Table1 from "../UI/Tables/Table1";
// import Table2 from "../UI/Tables/Table2";
import image from '../../assets/img/blog/blog-author-2.jpg'

const DUMMY = [
  {
    key: 1,
    image: image, 
    name: 'Jennifer Johns', 
    email: 'Jennifer@flipshop.com', 
    transactions: 1, 
    interest: 0, 
    status: 1, 
    date: '12/11/22'
  },
  {
    key: 2,
    image: image, 
    name: 'Jennifer Johns', 
    email: 'Jennifer@flipshop.com', 
    transactions: 1, 
    interest: 0, 
    status: 0, 
    date: '12/11/22'
  }
]
function Home(props) {
  return (
    <>
      <Title page="Customers" />
      <div className="container-fluid py-4">
        <Table1 data = {DUMMY}/>
        {/* <Table2 /> */}      
      </div>
    </>
  );
}

export default Home;

// <div className="row">
//         <div className="col-md-7 mt-4">
//           <div className="card">
//             <div className="card-header pb-0 px-3">
//               <h6 className="mb-0">Billing Information</h6>
//             </div>
//             <div className="card-body pt-4 p-3">
//               <ul className="list-group">
//                 <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
//                   <div className="d-flex flex-column">
//                     <h6 className="mb-3 text-sm">Oliver Liam</h6>
//                     <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Viking Burrito</span></span>
//                     <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">oliver@burrito.com</span></span>
//                     <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
//                   </div>
//                   <div className="ms-auto text-end">
//                     <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="/admin"><i className="far fa-trash-alt me-2"></i>Delete</a>
//                     <a className="btn btn-link text-dark px-3 mb-0" href="/admin"><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
//                   </div>
//                 </li>
//                 <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
//                   <div className="d-flex flex-column">
//                     <h6 className="mb-3 text-sm">Lucas Harper</h6>
//                     <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Stone Tech Zone</span></span>
//                     <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">lucas@stone-tech.com</span></span>
//                     <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
//                   </div>
//                   <div className="ms-auto text-end">
//                     <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="/admin"><i className="far fa-trash-alt me-2"></i>Delete</a>
//                     <a className="btn btn-link text-dark px-3 mb-0" href="/admin"><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
//                   </div>
//                 </li>
//                 <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
//                   <div className="d-flex flex-column">
//                     <h6 className="mb-3 text-sm">Ethan James</h6>
//                     <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Fiber Notion</span></span>
//                     <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">ethan@fiber.com</span></span>
//                     <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
//                   </div>
//                   <div className="ms-auto text-end">
//                     <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="/admin"><i className="far fa-trash-alt me-2"></i>Delete</a>
//                     <a className="btn btn-link text-dark px-3 mb-0" href="/admin"><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-5 mt-4">
//           <div className="card h-100 mb-4">
//             <div className="card-header pb-0 px-3">
//               <div className="row">
//                 <div className="col-md-6">
//                   <h6 className="mb-0">Your Transaction's</h6>
//                 </div>
//                 <div className="col-md-6 d-flex justify-content-end align-items-center">
//                   <i className="far fa-calendar-alt me-2"></i>
//                   <small>23 - 30 March 2020</small>
//                 </div>
//               </div>
//             </div>
//             <div className="card-body pt-4 p-3">
//               <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
//               <ul className="list-group">
//                 <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
//                   <div className="d-flex align-items-center">
//                     <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-down"></i></button>
//                     <div className="d-flex flex-column">
//                       <h6 className="mb-1 text-dark text-sm">Netflix</h6>
//                       <span className="text-xs">27 March 2020, at 12:30 PM</span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
//                     - $ 2,500
//                   </div>
//                 </li>
//                 <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
//                   <div className="d-flex align-items-center">
//                     <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></button>
//                     <div className="d-flex flex-column">
//                       <h6 className="mb-1 text-dark text-sm">Apple</h6>
//                       <span className="text-xs">27 March 2020, at 04:30 AM</span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
//                     + $ 2,000
//                   </div>
//                 </li>
//               </ul>
//               <h6 className="text-uppercase text-body text-xs font-weight-bolder my-3">Yesterday</h6>
//               <ul className="list-group">
//                 <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
//                   <div className="d-flex align-items-center">
//                     <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></button>
//                     <div className="d-flex flex-column">
//                       <h6 className="mb-1 text-dark text-sm">Stripe</h6>
//                       <span className="text-xs">26 March 2020, at 13:45 PM</span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
//                     + $ 750
//                   </div>
//                 </li>
//                 <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
//                   <div className="d-flex align-items-center">
//                     <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></button>
//                     <div className="d-flex flex-column">
//                       <h6 className="mb-1 text-dark text-sm">HubSpot</h6>
//                       <span className="text-xs">26 March 2020, at 12:30 PM</span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
//                     + $ 1,000
//                   </div>
//                 </li>
//                 <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
//                   <div className="d-flex align-items-center">
//                     <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></button>
//                     <div className="d-flex flex-column">
//                       <h6 className="mb-1 text-dark text-sm">Creative Tim</h6>
//                       <span className="text-xs">26 March 2020, at 08:30 AM</span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
//                     + $ 2,500
//                   </div>
//                 </li>
//                 <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
//                   <div className="d-flex align-items-center">
//                     <button className="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-exclamation"></i></button>
//                     <div className="d-flex flex-column">
//                       <h6 className="mb-1 text-dark text-sm">Webflow</h6>
//                       <span className="text-xs">26 March 2020, at 05:00 AM</span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center text-dark text-sm font-weight-bold">
//                     Pending
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
