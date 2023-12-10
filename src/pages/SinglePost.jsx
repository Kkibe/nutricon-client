import React from 'react'
import Post from '../components/Post'
import {NavLink} from "react-router-dom";

function SinglePost() {
  return (
    <div className='container '>
        <div className="tags d-flex align-items-center justify-content-evenly overflow-hidden mb-1">
          <NavLink to={`/blogs?tag=nutrition`} className="btn border btn-light text-secondary me-2">nutrition</NavLink>
          <NavLink to={`/blogs?tag=fitness`} className="btn border btn-light text-secondary me-2">fitness</NavLink>
          <NavLink to={`/blogs?tag=lifestyle`} className="btn border btn-light text-secondary me-2">lifestyle</NavLink>
          <NavLink to={`/blogs?tag=health`} className="btn border btn-light text-secondary me-2">health</NavLink>
        </div>
      <div>
        <h1 className='h1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="content d-flex align-items-center justify-center flex-column me-4 p-2">
          <img src="https://i.imgur.com/tPvlEdq.jpg" alt="blog-post"  className='m-2 w-100'/>
          <p className='lead'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eveniet accusantium culpa, animi natus id saepe error, eaque optio eos alias aut vitae placeat aliquam architecto iusto fuga modi! Saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores officia quod, incidunt accusantium obcaecati dignissimos adipisci fugiat ad porro voluptate corrupti labore illo non error? Maxime ipsum veritatis delectus?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eveniet accusantium culpa, animi natus id saepe error, eaque optio eos alias aut vitae placeat aliquam architecto iusto fuga modi! Saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores officia quod, incidunt accusantium obcaecati dignissimos adipisci fugiat ad porro voluptate corrupti labore illo non error? Maxime ipsum veritatis delectus?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eveniet accusantium culpa, animi natus id saepe error, eaque optio eos alias aut vitae placeat aliquam architecto iusto fuga modi! Saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores officia quod, incidunt accusantium obcaecati dignissimos adipisci fugiat ad porro voluptate corrupti labore illo non error? Maxime ipsum veritatis delectus?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eveniet accusantium culpa, animi natus id saepe error, eaque optio eos alias aut vitae placeat aliquam architecto iusto fuga modi! Saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores officia quod, incidunt accusantium obcaecati dignissimos adipisci fugiat ad porro voluptate corrupti labore illo non error? Maxime ipsum veritatis delectus?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eveniet accusantium culpa, animi natus id saepe error, eaque optio eos alias aut vitae placeat aliquam architecto iusto fuga modi! Saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores officia quod, incidunt accusantium obcaecati dignissimos adipisci fugiat ad porro voluptate corrupti labore illo non error? Maxime ipsum veritatis delectus?
          </p>
        </div>
      </div>


      <div className="container justify-content-center mt-5 border-left border-right">

    <div className="d-flex justify-content-center pt-3 pb-2"> <input type="text" name="text" placeholder="write a comment..." className="form-control addtxt"/> </div>

    <div className="d-flex justify-content-center py-2">

        <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>

            <div className="d-flex justify-content-between py-1 pt-2">

                <div><img src="https://i.imgur.com/AgAC1Is.jpg" width="18"/><span className="text2">Martha</span></div>

                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>

            </div>

        </div>

    </div>

    <div className="d-flex justify-content-center py-2">

        <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>

            <div className="d-flex justify-content-between py-1 pt-2">

                <div><img src="https://i.imgur.com/tPvlEdq.jpg" width="18"/><span className="text2">Curtis</span></div>

                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>

            </div>

        </div>

    </div>

    <div className="d-flex justify-content-center py-2">

        <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>

            <div className="d-flex justify-content-between py-1 pt-2">

                <div><img src="https://i.imgur.com/gishFbz.png" width="18" height="18"/><span className="text2">Beth</span></div>

                <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>

            </div>

        </div>

    </div>

    <div className="d-flex justify-content-center py-2 pb-3">

        <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>

            <div className="d-flex justify-content-between py-1 pt-2">

                <div><img src="https://i.imgur.com/tPvlEdq.jpg" width="18"/><span className="text2">Curtis</span></div>

                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4 text4o">1</span></div>

            </div>

        </div>

    </div>

</div>

      
      <section>
        <h1 className='h1 w-100 d-flex align-center justify-center m-4'><span className="lead">Related Posts</span></h1>
        <div className="row justify-content-evenly my-3">
          <Post />
          <Post />
          <Post />
        </div>
      </section>

    </div>
  )
}

export default SinglePost
