import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { deleteFromDb } from '../../service/auth-service';
import Post from '../Post/Post';

export default function PostsList({users}) {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('/postsData')
        .then(res => {
            setPosts(res.data)
        })
    },[]) 
 
    //console.log(posts);

    const deleteFromState = (id) => {
        deleteFromDb(id)
        const del = posts.filter(post => {
            return post._id !== id
        })
        setPosts(del)
    }

    const all = posts.map(post => {
        return (
            <div className='col-12 m-4' key={post._id}>
                <Post post={post} users={users} deleteFromState={deleteFromState} />
            </div>
        )
    })


    return (
        <div className='row'>
            {all}
        </div>
    )
}
