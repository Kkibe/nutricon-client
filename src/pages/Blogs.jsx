import React from 'react';
import Post from '../components/Post';

function Blogs() {
  return (
  <div className="container my-5">
      <div className="h-100 p-5 bg-light border rounded-3 my-5">
        <h2>Add borders</h2>
        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
        <button className="btn btn-outline-secondary" type="button">Explore &raquo;</button>
      </div>
      <div className="row justify-content-evenly">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="bd-example-snippet bd-code-snippet"><div className="bd-example">
        <nav aria-label="Standard pagination example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div></div>
  </div>
  )
}

export default Blogs;
