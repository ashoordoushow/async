import React from 'react';
import Header from './components/Header';
import PostsPage from './components/PostsPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;



















// import React from 'react';

// // Header Component
// function Header() {
//   return (
//     <header>
//       <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
//     </header>
//   );
// }

// // PostsNew Component
// function PostsNew() {
//   return (
//     <div id="posts-new">
//       <h1>New post</h1>
//       <form action="/submit-post" method="POST" encType="multipart/form-data">
//         <label htmlFor="title">Title</label>
//         <input type="text" id="title" name="title" required />

//         <label htmlFor="body">Body</label>
//         <textarea id="body" name="body" rows="10" required></textarea>

//         <label htmlFor="image">Image</label>
//         <input type="file" id="image" name="image" accept="image/*" />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// // PostsIndex Component
// function PostsIndex(props) {
//   console.log(props); // Log the props to see what is passed in

//   return (
//     <div id="posts-index">
//       <h1>All posts</h1>
//       <p>The name is {props.name}</p>
//       {props.posts.map((post) => (
//         <div key={post.id} className="post">
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//           <img src={post.image} alt={post.title} />
//         </div>
//       ))}
//     </div>
//   );
// }

// // Footer Component
// function Footer() {
//   return (
//     <footer>
//       <p>Copyright 20XX</p>
//     </footer>
//   );
// }

// // PostsPage Component
// function PostsPage() {
//   const name = "Test"; // Variable for name

//   // Define posts as an array of objects
//   const posts = [
//     {
//       id: 1,
//       title: "First Post",
//       body: "This is the body of the first post. It contains some interesting content about various topics.",
//       image: "https://via.placeholder.com/150?text=First+Post",
//     },
//     {
//       id: 2,
//       title: "Second Post",
//       body: "This is the body of the second post. It includes different information and insights.",
//       image: "https://via.placeholder.com/150?text=Second+Post",
//     },
//     {
//       id: 3,
//       title: "Third Post",
//       body: "This is the body of the third post. It provides more details and examples for readers.",
//       image: "https://via.placeholder.com/150?text=Third+Post",
//     },
//   ];

//   return (
//     <div>
//       <PostsNew />
//       <PostsIndex name={name} posts={posts} /> {/* Pass name and posts as props */}
//     </div>
//   );
// }

// // App Component
// function App() {
//   return (
//     <div>
//       <Header />
//       <PostsPage />
//       <Footer />
//     </div>
//   );
// }

// export default App;





















// function App() {
//   return (
//     <div>
//       <header>
//         <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
//       </header>

//       <div id="posts-new">
//         <h1>New post</h1>
//       </div>

//       <div id="posts-index">
//         <h1>All posts</h1>
//       </div>

//       <footer>
//         <p>Copyright 20XX</p>
//       </footer>
//     </div>
//   );
// }

// export default App;






















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
