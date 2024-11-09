import Comments from "./Comments";
import Seller from "./Seller";
// import image from "../../assets/img/blog/blog-author-4.jpg";
import "../../index.css";
import "./Listing.css";
import Hero from "../UI/Hero/Hero";
import SideBar from "./SideBar";
import ListItem from "./ListItem";
import { useLoaderData } from "react-router-dom";

const Listing = (props) => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <>
      <Hero title={data.title} page="Listing" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-8">
              <ListItem />
              <Seller/>
              <Comments />
            </div>
            <div className="col-lg-4">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
