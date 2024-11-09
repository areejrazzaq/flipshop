import { useLoaderData } from "react-router-dom";


const Seller = props => {
  const data = useLoaderData(); 
    return<div className="post-author d-flex align-items-center">
    {data.seller_picture ?
      <img src={data.seller_picture} className="rounded-circle flex-shrink-0" alt=""/>
      :
      <div className='shadow-lg mb-4 rounded-circle me-3' style={{minHeight: '150px', minWidth: '250px'}}></div>
    }
    <div>
      <h4>{data.seller_name}</h4>
      <div className="social-links pt-2">
        {data.seller_email}
      </div>
      <p>
        Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
      </p>
    </div>
  </div>
}

export default Seller; 
