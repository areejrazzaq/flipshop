import React from "react";
// import image from "../../../assets/img/blog/blog-author-2.jpg";
// import image1 from "../../../assets/img/blog/blog-1.jpg";
import { Link } from "react-router-dom";

export function Table1Row(props) {
  return (
    <tr>
      <td>
        <div className="d-flex px-2 py-1">
          <div>
            <img src={props.picture} className="avatar avatar-lg me-3" alt="user1" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-lg">{props.name}</h6>
            <p className="text-sm text-secondary mb-0">{props.email}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="align-middle text-center text-sm font-weight-bold mb-0">
          {props.transactions}
        </p>
        {/* <p className="text-sm text-secondary mb-0">
                            Organization
                          </p> */}
      </td>
      <td>
        <p className="align-middle text-center text-sm font-weight-bold mb-0">
          {props.interest}
        </p>
      </td>
      <td className="align-middle text-center text-sm">
        {props.status === 1 ? (
          <span className="badge badge-sm bg-gradient-danger">Blocked</span>
        ) : (
          <span className="badge badge-sm bg-gradient-success">Active</span>
        )}
      </td>
      <td className="align-middle text-center">
        <span className="text-secondary text-sm font-weight-bold">
          {new Date(props.date).toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </td>
      <td className="align-middle">
        <Link
          to={`${props.id}`}
          // to = '/admin/customers'
          className="text-secondary font-weight-bold text-sm"
          data-toggle="tooltip"
          data-original-title="Edit user"
        >
          View
        </Link>
      </td>
    </tr>
  );
}

export function ListingTableRow(props) {
  return (
    <tr>
      <td>
        <div className="d-flex px-2 py-1">
          <div>
            <img src={props.picture} className="avatar avatar-lg me-3" alt="user1" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-lg">{props.title}</h6>
          </div>
        </div>
      </td>
      <td>
        <p className="align-middle text-center text-sm font-weight-bold mb-0">
          {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
        </p>
        {/* <p className="text-sm text-secondary mb-0">
                            Organization
                          </p> */}
      </td>
      <td>
        <p className="align-middle text-center text-sm font-weight-bold mb-0">
          {props.model.charAt(0).toUpperCase() + props.model.slice(1)}
        </p>
      </td>
      <td>
        <p className="align-middle text-center text-sm font-weight-bold mb-0">
          {props.price}
        </p>
      </td>
      <td>
        <p className="align-middle text-center text-sm font-weight-bold mb-0">
          {props.name}
        </p>
        <p className="align-middle text-center text-sm text-secondary mb-0">
          {props.email}
        </p>
      </td>
      <td className="align-middle text-center">
        <span className="text-secondary text-sm font-weight-bold">
          {props.days}
        </span>
      </td>
      <td className="align-middle">
        <Link
          to={`${props.id}`}
          className="text-secondary font-weight-bold text-sm"
          data-toggle="tooltip"
          data-original-title="Edit user"
        >
          View
        </Link>
      </td>
    </tr>
  );
}

export function Table2Row(props) {
  // let progressClasses = "progress-bar ";
  // if (props.percentage >= 80) {
  //   progressClasses = "progress-bar bg-gradient-success";
  // } else if (props.percentage >= 40) {
  //   progressClasses = "progress-bar bg-gradient-primary";
  // } else if (props.percentage >= 25) {
  //   progressClasses = "progress-bar bg-gradient-info";
  // } else if (props.percentage < 25) {
  //   progressClasses = "progress-bar bg-gradient-danger";
  // }

  return (
    <tr>
      <td>
        <div className="d-flex px-2">
          <div>
            <img
              src={props.picture}
              className="avatar avatar-sm rounded-circle me-2"
              alt="spotify"
            />
          </div>
          <div className="my-auto">
            <h6 className="mb-0 text-lg">{props.name}</h6>
          </div>
        </div>
      </td>
      <td>
        <p className="text-sm font-weight-bold mb-0">PKR {props.price}</p>
      </td>
      <td>
        {props.status === 'in_migration' && <span className="text-sm font-weight-bold">In Migration</span>}
        {props.status === 'aborted' && <span className="text-sm font-weight-bold text-warning">Aborted</span>}
        {props.status === 'created' && <span className="text-sm font-weight-bold">Created</span>}
        {props.status === 'in_process' && <span className="text-sm font-weight-bold text-info">In Process</span>}
        {props.status === 'completed' && <span className="text-sm font-weight-bold text-success">Completed</span>}
        {props.status === 'rejected' && <span className="text-sm font-weight-bold text-danger">Rejected</span>}

      </td>
      <td className="align-middle text-center">
        <div className="d-flex align-items-center justify-content-center flex-column ">
          {/* <span className="me-2 text-sm font-weight-bold">
            {props.percentage}%
          </span>
          <div>
            <div className="progress">
              <div
                className={progressClasses}
                role="progressbar"
                aria-valuenow={props.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${props.percentage}%` }}
              ></div>
            </div>
          </div> */}
          <h6 className="text-lg mb-0">{props.seller}</h6>
          <p className="text-sm text-secondary mb-0">{props.email}</p>

        </div>
      </td>
      <td >
        {/* <button className="btn btn-link text-secondary mb-0">
          <i className="bi bi-three-dots-vertical text-xs"></i>
        </button> */}
        <p className="text-sm font-weight-bold mb-0 text-center">
          <span className="text-sm font-weight-bold"> 
          {new Date(props.date).toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
      </td>
    </tr>
  );
}

export function AuctionTableRow(props) {
  return (
    <tr>
      <td>
        <div className="d-flex flex-column justify-content-center">
          <h6 className="text-lg mb-0">{props.name}</h6>
          <p className="text-sm text-secondary mb-0">{props.email}</p>
        </div>
      </td>

      <td>
        <p className="text-sm font-weight-bold mb-0">PKR {props.price}</p>
      </td>
      <td>
        <span
          className={
            props.status === "rejected"
              ? "text-sm font-weight-bold rejected"
              : "text-sm font-weight-bold accepted"
          }
        >
          {props.status.charAt(0).toUpperCase() + props.status.slice(1)}
        </span>
      </td>
      <td className="align-middle">
        <p className="text-sm font-weight-bold mb-0">
          {new Date(props.date).toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </td>
      {props.asset_status === 'new' && props.price_model === 'fixed' && props.status !== "unavailable" &&  <td >
        <button className="btn text-success" onClick={() => {props.onClick(props.id, 'accept')}}>
          Accept Offer
        </button>
      </td>}
    </tr>
  );
}
