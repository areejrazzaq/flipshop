import "../../index.css";

// import image1 from '../../assets/img/clients/client-1.png'
// import image2 from '../../assets/img/clients/client-2.png'
// import image3 from '../../assets/img/clients/client-3.png'
// import image4 from '../../assets/img/clients/client-4.png'
// import image5 from '../../assets/img/clients/client-5.png'
// import image6 from '../../assets/img/clients/client-6.png'
// import image7 from '../../assets/img/clients/client-7.png'
// import image8 from '../../assets/img/clients/client-8.png'
import image9 from "../../assets/img/about.jpg";
import image10 from "../../assets/img/about-2.jpg";
import image11 from "../../assets/img/stats-img.svg";

// import Slider from 'react-slick'
import Testimonials from "./Testemonials";

import Team from "./Team";
import Services from "./Services";

const Bottom = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <div>
      <Services/>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>
                Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                porro incidunt dolores placeat sunt id nobis omnis tiledo stran
                delop
              </p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-6">
                <h3>Voluptatem dignissimos provident quasi corporis</h3>
                <img src={image9} className="img-fluid rounded-4 mb-4" alt="" />
                <p>
                  Ut fugiat ut sunt quia veniam. Voluptate perferendis
                  perspiciatis quod nisi et. Placeat debitis quia recusandae
                  odit et consequatur voluptatem. Dignissimos pariatur
                  consectetur fugiat voluptas ea.
                </p>
                <p>
                  Temporibus nihil enim deserunt sed ea. Provident sit expedita
                  aut cupiditate nihil vitae quo officia vel. Blanditiis
                  eligendi possimus et in cum. Quidem eos ut sint rem veniam
                  qui. Ut ut repellendus nobis tempore doloribus debitis
                  explicabo similique sit. Accusantium sed ut omnis beatae neque
                  deleniti repellendus.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Duis aute
                      irure dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate trideta
                      storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>

                  <div className="position-relative mt-4">
                    <img src={image10} className="img-fluid rounded-4" alt="" />
                    <a
                      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      className="glightbox play-btn"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="clients"  className="clients">
      <div  className="container" data-aos="zoom-out">

        <Slider  {...settings} className="clients-slider swiper">
          <div  className="swiper-wrapper align-items-center">
            <div  className="swiper-slide"><img src={image1}  className="img-fluid" alt="" /></div>
            <div  className="swiper-slide"><img src={image2}  className="img-fluid" alt="" /></div>
            <div  className="swiper-slide"><img src={image3}  className="img-fluid" alt="" /></div>
            <div  className="swiper-slide"><img src={image4}  className="img-fluid" alt="" /></div>
            <div  className="swiper-slide"><img src={image5}  className="img-fluid" alt="" /></div>
            <div  className="swiper-slide"><img src={image6}  className="img-fluid" alt="" /></div>
            <div  className="swiper-slide"><img src={image7}  className="img-fluid" alt="" /></div>
            <div  className="swiper-slide"><img src={image8}  className="img-fluid" alt="" /></div>
          </div>
        </Slider>

      </div>
    </section> */}

        <section id="stats-counter" className="stats-counter">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <img src={image11} alt="" className="img-fluid" />
              </div>

              <div className="col-lg-6">
                <div className="stats-item d-flex align-items-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>Happy Clients</strong> consequuntur quae diredo para
                    mesta
                  </p>
                </div>

                <div className="stats-item d-flex align-items-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>Projects</strong> adipisci atque cum quia aut
                  </p>
                </div>

                <div className="stats-item d-flex align-items-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="453"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>Hours Of Support</strong> aut commodi quaerat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action" className="call-to-action">
          <div className="container text-center" data-aos="zoom-out">
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox play-btn"
            ></a>
            <h3>Call To Action</h3>
            <p>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a className="cta-btn" href="/">
              Call To Action
            </a>
          </div>
        </section>

        {/* <Testimonials/> */}
        <Team />

        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="content px-xl-5">
                  <h3>
                    Frequently Asked <strong>Questions</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>

              <div className="col-lg-8">
                <div
                  className="accordion accordion-flush"
                  id="faqlist"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                      >
                        <span className="num">1.</span>
                        Non consectetur a erat nam at lectus urna duis?
                      </button>
                    </h3>
                    <div
                      id="faq-content-1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-2"
                      >
                        <span className="num">2.</span>
                        Feugiat scelerisque varius morbi enim nunc faucibus a
                        pellentesque?
                      </button>
                    </h3>
                    <div
                      id="faq-content-2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-3"
                      >
                        <span className="num">3.</span>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi?
                      </button>
                    </h3>
                    <div
                      id="faq-content-3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-4"
                      >
                        <span className="num">4.</span>
                        Ac odio tempor orci dapibus. Aliquam eleifend mi in
                        nulla?
                      </button>
                    </h3>
                    <div
                      id="faq-content-4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-5"
                      >
                        <span className="num">5.</span>
                        Tempus quam pellentesque nec nam aliquam sem et tortor
                        consequat?
                      </button>
                    </h3>
                    <div
                      id="faq-content-5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bottom;
