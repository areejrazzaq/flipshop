import "../../Admin/Admin.css";
import ListItem from "./Item";
import { Form, Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="green sidebar p-2">
      <div className="m-2">
        <i className="bi bi-person-circle me-3 fs-4"></i>
        <span className="brand-name fs-4">{props.name}</span>
      </div>
      <hr className="text-dark" />
      <div className=" green list-group list-group-flush">
        {props.DUMMY.map((link) => (
          <ListItem
            name={link.name}
            link={link.link}
            number={link.number}
            key={link.name}
            icon={link.icon}
          />
        ))}

        <div className="list-group-item p-0 border-0 green">
          <Form action="/logout" method="POST" className="green ">
            <div className="h-100">
              <button className="side-bar-logout w-100 p-0 ms-auto" type='submit'>
              <a className="list-group-item py-2 border-0">
                  <i className="fs-5 me-3 bi bi-power"></i>
                  <span>Logout</span>
              </a>
                {/* <i className="fs-5 me-3 bi bi-power"></i>
                <span>Logout</span> */}
                {/* <Link className="list-group-item py-2">
                  
                  <i className="fs-5 me-3 bi bi-power"></i>
                  <span>Logout</span>
                 
                </Link> */}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
