import TestimonialItem from "./TestemonialItem";
import image1 from '../../assets/img/testimonials/testimonials-1.jpg';
import image2 from '../../assets/img/testimonials/testimonials-2.jpg';
import image3 from '../../assets/img/testimonials/testimonials-3.jpg';
import image4 from '../../assets/img/testimonials/testimonials-4.jpg';
import image5 from '../../assets/img/testimonials/testimonials-5.jpg';
import Swiper from 'swiper';
import { useRef, useEffect } from "react";

const dummy = [{
    key: 1,
    name: 'Saul Goodman', 
    designation: 'Ceo: Founder', 
    image: image1,
    feedback: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
},
{
    key: 2,
    name: 'Sara Wilsson', 
    designation: 'Designer', 
    image: image2,
    feedback: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
},
{
    key: 3,
    name: 'Jena Karlis', 
    designation: 'Store Owner', 
    image: image3,
    feedback: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
},
{
    key: 4,
    name: 'Matt Brandon', 
    designation: 'Freelancer', 
    image: image4,
    feedback: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.'
},
{
    key: 5,
    name: 'John Larson', 
    designation: 'Entrepreneur', 
    image: image5,
    feedback: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.'
}]
const Testimonials = () => {
    const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  useEffect(() => {
    if (swiperRef.current !== null) {
      const swiper = new Swiper(swiperRef.current, swiperOptions);
    }
  }, []);

  
    return(
<section id="testimonials"  className="testimonials">
      <div  className="container" data-aos="fade-up">

        <div  className="section-header">
          <h2>Testimonials</h2>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
        </div>

        <div  className="slides-3 swiper-container"  data-aos="fade-up" data-aos-delay="100" ref={swiperRef}>
          <div  className="swiper-wrapper">
          {dummy.map(item => <TestimonialItem key={item.key} name={item.name} designation={item.designation} feedback={item.feedback} image={item.image}/>)}
          </div>
          <div  className="swiper-pagination"></div>
        </div>

      </div>
    </section>
)
}

export default Testimonials; 