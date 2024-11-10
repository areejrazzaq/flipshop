import '../../index.css'
import { Form, useActionData } from 'react-router-dom';
import { useRef } from 'react';

const Contact = () => {
  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);

  const response = useActionData()
  if(response){
    name.current.value = ''
    email.current.value = ''
    subject.current.value = ''
    message.current.value = ''
  }

  console.log(response)
    return(<section id="contact"  className="contact">
      <div  className="container" data-aos="fade-up">

        <div  className="section-header">
          <h2>Contact</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
        </div>

        <div  className="row gx-lg-0 gy-4">

          <div  className="col-lg-4">

            <div  className="info-container d-flex flex-column align-items-center justify-content-center">
              <div  className="info-item d-flex">
                <i  className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>Street 8 Sector H-12, Capital Territory, Islamabad</p>
                </div>
              </div> 

              <div  className="info-item d-flex">
                <i  className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>flipshop@gmail.com</p>
                </div>
              </div> 

              <div  className="info-item d-flex">
                <i  className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+151 12345678</p>
                </div>
              </div> 

              <div  className="info-item d-flex">
                <i  className="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div> 
            </div>

          </div>

          <div  className="col-lg-8">
            <Form role="form"  className="php-email-form" method='POST'>
              <div  className="row">
                <div  className="col-md-6 form-group">
                  <input type="text" name="name"  className="form-control" id="name" placeholder="Your Name" required ref={name}/>
                </div>
                <div  className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email"  className="form-control" name="email" id="email" placeholder="Your Email" required ref={email}/>
                </div>
              </div>
              <div  className="form-group mt-3">
                <input type="text"  className="form-control" name="subject" id="subject" placeholder="Subject" required ref={subject}/>
              </div>
              <div  className="form-group mt-3">
                <textarea  className="form-control" name="message" rows="7" placeholder="Message" required ref={message} maxLength="255"></textarea>
              </div>
              <div  className="my-3">
                <div  className="loading">Loading</div>
                <div  className="error-message"></div>
                <div  className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div  className="text-center"><button type="submit" >Send Message</button></div>
               {response && <div className="text-center pt-3 accepted">{response}</div>}
            </Form>
          </div>

        </div>

      </div>
    </section>

    )

}

export default Contact; 