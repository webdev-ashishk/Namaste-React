import { useParams } from "react-router-dom";
export default function About() {
  const id = useParams();
  return (
    <div>
      <h4>about.jsx rendered!</h4>
      <p>{id?.about_id}</p>
    </div>
  );
}
