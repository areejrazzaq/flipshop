import Button from "../UI/Button/Button2";

export const ReviewItem = (props) => {
  return (
    <li className="bg-light list-group-item border-0 d-flex p-4 mb-4 bg-gray-100 border-radius-lg">
      <div className="d-flex flex-column">
        <h6 className="mb-3 text-lg">{props.subject}</h6>
        <span className="mb-2 text-sm">
          User Name:{" "}
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.name}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Email Address:{" "}
          <span className="text-dark ms-sm-2 font-weight-bold">
            {props.email}
          </span>
        </span>
        <span className="text-sm">
          Date:{" "}
          <span className="text-dark ms-sm-2 font-weight-bold">
            {DateFunction(props.date)}
          </span>
        </span>
      </div>
      <div className="ms-auto text-end">
        <button
          className="btn btn-link text-warning text-gradient px-3 mb-0 fw-bold text-decoration-none"
          onClick={() => props.submitHandler(props.id)}
        >
          <i className="bi bi-eye-fill me-2"></i>View
        </button>
      </div>
    </li>
  );
};

export const ReviewDetails = (props) => {
  return (
    <>
      <div className="d-block p-3">
        <div className="d-block d-flex mb-3">
          <h4 className="col-9 text-secondary">{props.subject}</h4>
          <div className="p-2 ms-auto col-3">
            {props.has_replied === 'no' &&
            <button
              onClick={() => props.handleYesClick(props.id)}
              className="btn btn-primary"
            >
              Mark as Read
            </button>}
          </div>
        </div>
        <div className="d-flex py-1 mb-3">
          <div className="d-flex flex-column justify-content-center">
            <i className="bi bi-person-circle fs-1 text-secondary"></i>
          </div>
          <div className="d-flex flex-column justify-content-center ps-2">
            <h6 className="mb-0 text-lg">{props.name}</h6>
            <p className="text-sm text-secondary mb-0">{props.email}</p>
          </div>
          <div className="d-flex flex-column mt-1 ps-2">
            {DateFunction(props.date)}
          </div>
        </div>
        <div>{props.message}</div>
      </div>
      <div className="d-block d-flex justify-content-end">
        <Button type="button" text="Close" onClick={props.handleCancelClick} />
      </div>
    </>
  );
};

const DateFunction = (value) => {
  const date = new Date(value);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormatted = date.toLocaleDateString("en-US", options);
  const timeFormatted = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const finalDate = `${dateFormatted} at ${timeFormatted}`;
  return finalDate;
};

export const SideItem = (props) => {
  let batch;
  if(props.has_replied === "no"){
    batch = <div className="d-flex align-items-center text-danger text-gradient text-lg font-weight-bold">
    Not Replied
  </div>
  } else  if(props.has_replied === "yes"){
    batch = <div className="d-flex align-items-center text-success text-gradient text-lg font-weight-bold">
    Replied
  </div>}
  return (
    <li className="list-group-item border-0 d-flex justify-content-between ps-3 mb-2 border-radius-lg" onClick={() => props.submitHandler(props.id)}>
      <div className="d-flex align-items-center">
        <div className="d-flex flex-column">
          <h6 className="mb-1 text-dark text-lg">{props.name}</h6>
          <span className="text-sm">{DateFunction(props.date)}</span>
        </div>
      </div>
      {props.previous === 'yes' ? 
        <button
          className="btn btn-link text-success text-gradient px-3 mb-0 fw-bold text-decoration-none"
          onClick={() => props.submitHandler(props.id)}
        >
          <i className="bi bi-eye-fill me-2"></i>View
        </button>
        : 
        batch
      }
      {/* {props.has_replied === "no" ? (
        <div className="d-flex align-items-center text-danger text-gradient text-lg font-weight-bold">
          Not Replied
        </div>
      ) : (
        <div className="d-flex align-items-center text-success text-gradient text-lg font-weight-bold">
          Replied
        </div>
      )} */}
    </li>
  );
};
