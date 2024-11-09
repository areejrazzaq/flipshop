import React from "react";
import Card from "../UI/Card/Card";

function Services() {
  return (
    <section id="services" className="services sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
            incidunt dolores placeat sunt id nobis omnis tiledo stran delop
          </p>
        </div>

        <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
          <Card
            title="Broker"
            description="Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur."
          />
          <Card
            title="Legal Services & Templates"
            description="Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem."
          />
          <Card
            title="Find a buyer. Keep your privacy"
            description="Listing your online business as a Flippa Private listing enables
                complete privacy. We curate a small list of targeted buyers and
                partner you up. It’s like having your own personal matchmaker."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
