import { Link } from "react-router-dom";
function ListItem(props) {
  const icon = "fs-5 me-3 bi " + props.icon;
  // console.log(icon)
  return (
    <Link className="list-group-item py-2" to={props.link}>
      <div className="me-auto">
        <i className={icon}></i>
        <span>{props.name}</span>
      </div>
      {props.number && props.number !== 0 && (
        <span className="badge bg-primary rounded-pill">{props.number}</span>
      )}
    </Link>
  );
}

export default ListItem;
