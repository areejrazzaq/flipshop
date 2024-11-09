import './Form.css'

const From = props => {
    return(
      <div className="reply-form">

      <h4>{props.heading}</h4>
      <p>{props.description}</p>
      <form action="">
        <div className="row">
          <div className="col-md-6 form-group">
            <input name="name" type="text" className="form-control" placeholder="Your Name*" />
          </div>
          <div className="col-md-6 form-group">
            <input name="email" type="text" className="form-control" placeholder="Your Email*" />
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <input name="website" type="text" className="form-control" placeholder="Your Website" />
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Post Comment</button>

      </form>

    </div>
    )
}

export default From; 