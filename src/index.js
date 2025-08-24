// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { books } from "./books.js";
// import Book from "./Book.js";
// // const fBook = {
// //   title: "Hanu",
// //   author: "Ram 1",
// // };

// // const sBook = {
// //   title: "Ramji",
// //   author: "Ram 2",
// // };

// function BookiList() {
//   return (
//     <>
//       {books.map((book) => {
//         return <Book book={book} />;
//       })}
//     </>
//   );
// }

// const root = createRoot(document.getElementById("root"));
// root.render(<BookiList />);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Index />);
