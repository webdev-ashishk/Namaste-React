import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
export default function Body() {
  const [posts, setPost] = useState(null);
  useEffect(() => {
    apiCall();
  }, []);
  async function apiCall() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    setPost(json);
  }

  console.log(posts);
  return !posts ? (
    <Shimmer />
  ) : (
    <div>
      <h2>body.jsx rendered!</h2>
      {posts.map((post) => (
        <p key={post.id}>
          post id : {post.id} - {post?.title}
        </p>
      ))}
    </div>
  );
}
