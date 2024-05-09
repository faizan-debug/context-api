import React from 'react'

const PostItem = ({post: {title, body}}) => {
  return (
    <li>
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    </li>
  )
}

export default PostItem
