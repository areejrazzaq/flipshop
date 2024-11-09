import Hero from '../UI/Hero/Hero';
import image from '../../assets/img/blog/blog-author.jpg'
import Comments from "./Comments"
import { useLoaderData } from 'react-router-dom';

const ListItem = props => {
  const data = useLoaderData(); 
    return ( <> <article className="blog-details">

                <div className='d-flex'>
                <h2 className="title">{data.asset_type === 'blog' ? data.sub_asset.blog_name : data.title}</h2>
                <div className="mx-4 my-3 ms-auto">
                <span className="badge badge-sm bg-gradient-danger">{data.status === 'in_progress' ? 'In Progress' : data.status}</span>
                </div>
                </div>
                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">{data.seller_name}</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time>{data.status === 'in_progress' ? 'In Progress' : data.status}</time></a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">{data.interests_count} Interested</a></li>
                  </ul>
                </div>
                <br></br>

                {data.asset_type === 'blog' &&
                 <div className="mb-5 flex-shrink-0">
                  <table className="table table-borderless">
                    <tbody>
                      <tr className="social-links">
                        <td scope="col">Type</td>
                        <td scope="col">Industry</td>
                        <td scope="col">Monetization</td>
                        <td scope="col">Site Age</td>
                        <td scope="col">Net Profit</td>
                      </tr>
                      <tr className="social-links2">
                        <td scope="col">{data.sub_asset.type.charAt(0).toUpperCase() + data.sub_asset.type.slice(1)}</td>
                        <td scope="col">{data.sub_asset.industry}</td>
                        <td scope="col">{data.sub_asset.monitization.charAt(0).toUpperCase() + data.sub_asset.monitization.slice(1)}</td>
                        <td scope="col">{data.sub_asset.site_age} years</td>
                        <td scope="col">PKR {data.sub_asset.net_profit_per_month} p/mo</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>Created at: {new Date(data.sub_asset.created_at).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                  })}
                  </div>
                </div>}

                {data.asset_type === 'daraz' &&
                 <div className="mb-5 flex-shrink-0">
                 <div className="content"><h3>Store Info</h3></div>
                  <table className="table table-borderless">
                    <tbody>
                      <tr className="social-links">
                        <td scope="col">Store Name</td>
                        <td scope="col">Main Category</td>
                        <td scope="col">Number of Products</td>
                        <td scope="col">Average Profit</td>
                      </tr>
                      <tr className="social-links2">
                        <td scope="col">{data.sub_asset.store_name.charAt(0).toUpperCase() + data.sub_asset.store_name.slice(1)}</td>
                        <td scope="col">{data.sub_asset.main_category_name.charAt(0).toUpperCase() + data.sub_asset.main_category_name.slice(1)}</td>
                        <td scope="col">{data.sub_asset.products_num}</td>
                        <td scope="col">{data.sub_asset.avg_profit} p/{data.sub_asset.months}m</td>
                      </tr>
                    </tbody>
                  </table>
                </div>}



                <div className="content">
                  <h3>About the business</h3>
                  <p>
                  {data.description}
                  </p>
                </div>

                
                {data.asset_type === 'daraz' &&
                 <div className="mb-5 flex-shrink-0">
                 <div className="content"><h3>Store Statistics</h3></div>
                  <table className="table table-borderless">
                    <tbody>
                      <tr className="social-links">
                        <td scope="col">Ship on Time</td>
                        <td scope="col">Positive Seller Rating</td>
                        <td scope="col">Response Time</td>
                        <td scope="col">Response Rate</td>
                      </tr>
                      <tr className="social-links2">
                      <td scope="col">{data.sub_asset.ship_on_time}</td>
                        <td scope="col">{data.sub_asset.positive_seller_rating}</td>
                        <td scope="col">{data.sub_asset.response_time}</td>
                        <td scope="col">{data.sub_asset.response_rate}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>}

                {data.asset_type === 'daraz' &&
                 <div className="mb-5 flex-shrink-0">
                 <div className="content"><h3>Statistics Files</h3></div>
                  <table className="table table-borderless">
                    <tbody>
                      <tr className="social-links">
                        <td scope="col">Month 1</td>
                        <td scope="col">Month 2</td>
                        <td scope="col">Month 3</td>
                      </tr>
                      <tr className="social-links2">
                      <td scope="col">{data.sub_asset.month_first_file}</td>
                        <td scope="col">{data.sub_asset.second}</td>
                        <td scope="col">{data.sub_asset.third}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>}



                <div className="meta-bottom">
                  <i className="bi bi-folder">      </i>
                  <ul className="cats">
                    <li><a href="///">Business</a></li>
                  </ul>

                  <i className="bi bi-tags">        </i>
                  <ul className="tags">
                    <li><a href="////">Listings</a></li>
                    <li><a href="////">Sales</a></li>
                    <li><a href="////">Marketing</a></li>
                  </ul>
                </div>

              </article>
                  </>)
}

export default ListItem; 