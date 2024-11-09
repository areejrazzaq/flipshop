const TeamItem = props => {
    return(
        <div  className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div  className="member">
              <img src={props.image}  className="img-fluid" alt=""/>
              <h4>{props.name}</h4>
              <span>{props.designation}</span>
              <div  className="social">
                <a href={props.twiter}><i  className="bi bi-twitter"></i></a>
                <a href={props.facebook}><i  className="bi bi-facebook"></i></a>
                <a href={props.instagram}><i  className="bi bi-instagram"></i></a>
                <a href={props.linkedIn}><i  className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

    )
}

export default TeamItem; 