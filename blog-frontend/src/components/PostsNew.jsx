import React from 'react';

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form action="/submit-post" method="POST" encType="multipart/form-data">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="body">Body</label>
        <textarea id="body" name="body" rows="10" required></textarea>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" accept="image/*" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostsNew;
