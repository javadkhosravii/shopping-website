import React from "react";
// import Axios from "axios";

export async function getStaticProps() {
  const response = await fetch(
    "https://learnwebcode.github.io/json-example/posts.json"
  );
  const data = await response.json();
  return {
    props: {
      posts: data.posts,
    },
  };
}
// Axios.get("https://learnwebcode.github.io/json-example/posts.json").then(
//   (res) => {
//     console.log(res.data);
//   }
// );

const Blog = (props) => {
  return (
    <section className="flex w-full h-full">
      <h1>Welcome to our blog page</h1>
      <div>
        {props.posts.map((post, index) => {
          return (
            <div key={index}>
              <h2>
                <link rel="stylesheet" href="">{post.title}</link>
              </h2>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
