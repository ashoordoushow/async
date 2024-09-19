import React, { useState, useEffect } from "react";
import PostsNew from "./PostsNew";
import PostsIndex from "./PostsIndex";
import axios from "axios";
import { Modal } from "./Modal";


function PostsPage() {
  const name = "Test"; // Variable for name

  // Start with an empty array for posts
  const [posts, setPosts] = useState([]);

  // Function to handle fetching posts
  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json")
      .then(response => {
        console.log(response.data); // Log the response data
        setPosts(response.data); // Set the posts
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  };

  // Use useEffect to run handleIndex on component mount
  useEffect(() => {
    handleIndex();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <PostsNew />
      <PostsIndex name={name} posts={posts} /> {/* Pass name and posts as props */}
    </div>
  );
}

export default PostsPage;
