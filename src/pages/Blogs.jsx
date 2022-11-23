import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from '../components/Post';

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/blogs')
      setPosts(res.data);
      console.log(posts)
    }

    fetchPosts();
    
  },[])
  return (
  <div className="container">
      <div className="h-100 p-4 bg-light border rounded-3 my-3">
        <h2>Lose weight faster</h2>
        <p>You can lose weight within 30 days by doing this simple tricks everyday.</p>
        <button className="btn btn-outline-secondary" type="button">Learn How &raquo;</button>
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
