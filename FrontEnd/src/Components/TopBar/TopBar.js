import "./TopBar.css";
import { Form, Link, useRouteLoaderData } from "react-router-dom";


const TopBar = () => {
  const { token, name, role } = useRouteLoaderData("root");

  let link = "/buyer";
  if (role === "admin") {
    link = "/admin";
  } else if (role === "seller") {
    link = "/seller";
  }

  return (
    <section id="topbar" className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">

        <div className="contact-info d-none d-md-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">flipshop.support@gmail.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>051 12345632</span>
          </i>
        </div>

        <div className="social-links d-flex align-items-center">
          {!token && <Link to="/login">Login</Link>}
          {!token && <Link to="/signup">Signup</Link>}
          {token && <Link to={link}>{name}</Link>}
          {token && (
            <Form action="/logout" method="POST">
              <button>Logout</button>
            </Form>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default TopBar;
