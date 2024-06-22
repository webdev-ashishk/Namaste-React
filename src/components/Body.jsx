import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
export default function Body() {
  const [posts, setPost] = useState(null);
  const [filterPosts, setFilterPost] = useState(null);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    apiCall();
  }, []);
  async function apiCall() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    setPost(json);
    setFilterPost(json);
  }
  // console.log(posts);
  function handleEvenPosts() {
    const result = posts.filter((post) => post.id % 2 === 0);
    console.log("handleEvenPosts");
    console.log(result);
    setFilterPost(result);
  }
  function handleOddPosts() {
    const result = posts.filter((post) => post.id % 2 !== 0);
    console.log("handleOddPosts");
    console.log(result);
    setFilterPost(result);
  }
  // TODO TASKS
  // function handlePrimeNumberPosts (){}
  // function handleCompositeNumberPosts (){}

  ////////////////SEARCH_DATA FUNCTION ///////
  console.log("body");
  return !posts ? (
    <Shimmer />
  ) : (
    <div>
      {/* filter button functionality */}
      <div className="filter-post">
        <button onClick={handleEvenPosts}>filter-even-number-posts</button>
        <button onClick={handleOddPosts}>filter-odd-number-posts</button>
      </div>
      {/* search button functionality */}
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          placeholder="search posts by title ... "
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          style={{ marginLeft: "5px" }}
          onClick={() => {
            console.log(searchText);
            const filterPost = posts.filter((post) =>
              post?.title.toLowerCase()?.includes(searchText.toLowerCase())
            );
            setFilterPost(filterPost);
          }}
        >
          search
        </button>

        <hr />
      </div>
      {/* show all posts in UI */}
      {filterPosts.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <p key={post.id}>
            post id : {post.id} - {post?.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
// jsonplaceholder https://jsonplaceholder.typicode.com/posts/32
