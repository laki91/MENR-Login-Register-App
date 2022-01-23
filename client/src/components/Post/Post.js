import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

export default function Post({post, users, deleteFromState}) {


    const handeDelete = () => {
        deleteFromState(post._id)
    }

  return (
      <div className="card-body">
          <h3 className='post-h3'>{post.title}</h3>
          <p className='lead mt-3'>{post.text.substr(0, 300)} ..</p>
          <div className="row">
              <div className="col-6">
              <p><em>{post.firstName} {post.lastName} </em></p>
              <p >Posted: {post.date}</p>
              </div>
              <div className="col-6 align-self-end text-end">
              <Link to={'/post/'+ post._id} className='btn btn-info me-4'>read more</Link>
                  {
                      users.role === 'admin'
                      ?
                      <button onClick={handeDelete} className='btn btn-danger '>Remove</button>
                      :
                      null
                  }
              </div>
          </div>
      </div>
  )
}
