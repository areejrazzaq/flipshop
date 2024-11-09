const TestimonialItem = props => {
return(
    <div  className="swiper-slide">
              <div  className="testimonial-wrap">
                <div  className="testimonial-item">
                  <div  className="d-flex align-items-center">
                    <img src={props.image}  className="testimonial-img flex-shrink-0" alt="" />
                    <div>
                      <h3>{props.name}</h3>
                      <h4>{props.designation}</h4>
                      <div  className="stars">
                        <i  className="bi bi-star-fill"></i><i  className="bi bi-star-fill"></i><i  className="bi bi-star-fill"></i><i  className="bi bi-star-fill"></i><i  className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i  className="bi bi-quote quote-icon-left"></i>
                    {props.feedback}
                    <i  className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
);
}

export default TestimonialItem; 