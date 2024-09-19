import React from 'react';

function PostsIndex(props) {
  console.log(props); // Log the props to see what is passed in

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <p>The name is {props.name}</p>
      {props.posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt={post.title} />
        </div>
      ))}
    </div>
  );
}

export default PostsIndex;
