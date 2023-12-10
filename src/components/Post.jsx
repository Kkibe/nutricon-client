import Image from '../assets/img.png'
import {  Link, NavLink} from "react-router-dom";

function Post() {
  const data = {
    img : '',
    title : 'lorem ipsum dolo sit amet',
    description: "desc",
    id: '1'
    
  } 
  const {img, title, description, id} = data;
  return (
    <div className="card col-12 col-md-4 mb-4" style={{ width : "22rem"}}>
      <img src={Image} className="card-img-top" alt="image"/>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <NavLink to={`/blogs/${id}`} className="btn border btn-light text-success">Read More &raquo;</NavLink>
        <small className="text-muted">9 mins</small>
      </div>
      
    </div>
    </div>
  );
}

export default Post;
