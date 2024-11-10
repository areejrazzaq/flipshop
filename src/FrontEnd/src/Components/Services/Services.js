import React from "react";
import Hero from "../UI/Hero/Hero";
import image from '../../assets/img/testimonials/testimonials-2.jpg'

function Services() {
  return (
    <main id="main">
      <Hero
        title="Services"
        description="Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem."
        page="Services"
      />

      <section id="portfolio-details" className="portfolio-details">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>Services Details</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
                <p>
                  Amet consequatur qui dolore veniam voluptatem voluptatem sit.
                  Non aspernatur atque natus ut cum nam et. Praesentium error
                  dolores rerum minus sequi quia veritatis eum. Eos et doloribus
                  doloremque nesciunt molestiae laboriosam.
                </p>

                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img
                      src={image}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Imdad</h3>
                    <h4>Domain Expert</h4>
                  </div>
                </div>

                <p>
                  Impedit ipsum quae et aliquid doloribus et voluptatem quasi.
                  Perspiciatis occaecati earum et magnam animi. Quibusdam non
                  qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque
                  minus deserunt assumenda tempore. Delectus voluptas
                  necessitatibus est.
                </p>

                <p>
                  Sunt voluptatum sapiente facilis quo odio aut ipsum repellat
                  debitis. Molestiae et autem libero. Explicabo et quod
                  necessitatibus similique quis dolor eum. Numquam eaque
                  praesentium rem et qui nesciunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>Service information</h3>
                <ul>
                  <li>
                    <strong>Category</strong> <span>Lagal</span>
                  </li>
                  <li>
                    <strong>Client</strong> <span>ABC Company</span>
                  </li>
                  <li>
                    <strong>Peoviding Fee</strong> <span>$677.99</span>
                  </li>
                  <li>
                    <strong>Services conditions</strong>{" "}
                    <a href="#">www.example.com</a>
                  </li>
                  <li>
                    <a href="#" className="btn-visit align-self-start">
                      Visit Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
