import React from "react";
import movies from "./movie.json";

const Search = () => {
  return (
    <div className="searchmovie">
      <input type="text" />
      <button>search Movie</button>
    </div>
  );
};
//--------This is not efficient way to display movie-------------->
// export default function Body() {
//   const MovieCart = ({ mName, mtitle }) => {
//     return (
//       <div className="movieCart">
//         <img
//           src="https://images.all-free-download.com/images/graphicwebp/movie_logo_design_text_reel_filmstrip_icons_decoration_6829232.webp"
//           alt="me"
//           className="logo"
//         />
//         <h1>{mName}</h1>
//         <h2>{mtitle}</h2>
//       </div>
//     );
//   };

/* ==========This is better version from previous way============= */
export default function Body() {
  const MovieCart = (props) => {
    return (
      <div className="movieCart">
        <img src={props.img} alt="me" />
        <h2>{props.title}</h2>
        <h4>{props.year}</h4>
      </div>
    );
  };
  return (
    <div className="body">
      {/* <Search /> */}
      <div className="cartContainer">
        {movies.map((element) => {
          //------this will create magic ------>
          return (
            <>
              <MovieCart
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
