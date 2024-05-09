import React from 'react'
import PostItem from './PostItem';

const Posts = () => {

    const posts = [
        {
            title: 'Faizan',
            body: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
        },
        {
            title: 'Ahmed',
            body: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
        }
    ];
  return (
    <div>
        <h2>All Posts</h2>
        <ul>
            {
                posts.map((post, index) => <PostItem key={index} post={post} index={index}/>)
            }
        </ul>
      
    </div>
  )
}

export default Posts
