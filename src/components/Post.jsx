import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

export default function Post() {
  const [postData, setPostData] = useState(null);
  const { pId } = useParams();
  useEffect(() => {
    getPostDetails();
  }, []);
  async function getPostDetails() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + pId
    );
    const json = await response.json();
    setPostData(json);
  }

  console.log(postData);
  return !postData ? (
    <Shimmer />
  ) : (
    <div>
      <h2>post component rendered! pid: {pId}</h2>
      <h2>post id : {postData.id}</h2>
      <h2>post title: {postData.title}</h2>
    </div>
  );
}
