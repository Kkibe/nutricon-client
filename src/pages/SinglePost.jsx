import React from 'react'
import Post from '../components/Post'

function SinglePost() {
  return (
    <div className='container '>
        <div className="tags d-flex align-items-center justify-content-evenly overflow-hidden mb-1">
          <a href={`/blogs?tag=nutrition`} className="btn border btn-light text-secondary me-2">nutrition</a>
          <a href={`/blogs?tag=fitness`} className="btn border btn-light text-secondary me-2">fitness</a>
          <a href={`/blogs?tag=lifestyle`} className="btn border btn-light text-secondary me-2">lifestyle</a>
          <a href={`/blogs?tag=health`} className="btn border btn-light text-secondary me-2">health</a>
        </div>
      <div>
        <h1 className='h1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="content d-flex align-items-center justify-center flex-column me-4 p-2">
          <img src="" alt=""  className='m-2'/>
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
